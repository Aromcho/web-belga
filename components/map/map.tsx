import React from 'react';
import * as ol from 'ol';
import { XYZ } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import {
  MapWrapper
} from './map.styles';
import { normalStyle, hgihStyle } from './helpers';

export interface MapProps {
  center?: { lon: number; lat: number };
  marker?: { lon: number; lat: number };
  markers?: { lon: number; lat: number, high?: boolean, id: string}[];
  zoom?: number;
}

export const Map = ({center, zoom, marker, markers}: MapProps) => {

  const [stMap, setMap] = React.useState<ol.Map>();
  const mapElement = React.useRef<HTMLDivElement>(null);

  const [vectorLayer, ] = React.useState(
    new VectorLayer({
      source: new VectorSource({}),
      style: [
       normalStyle
      ],
      zIndex: 20
    })
  );

  React.useEffect(() => {
    const hihglighted = markers?.find(item => !!item.high)
    vectorLayer.getSource()?.getFeatures().forEach(ft => {
      if(ft.getId() === hihglighted?.id){
        ft.setStyle(hgihStyle);
      } else {
        ft.setStyle(normalStyle);
      }
    })
  }, [markers])

  React.useEffect(() => {
    if(center) stMap?.getView().setCenter(fromLonLat([center.lon, center.lat]))
    if(zoom) stMap?.getView().setZoom(zoom);
  }, [center])
  

  React.useEffect(() => {
    const initialMap = new ol.Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png`
          }),
          preload: Infinity,
          zIndex: 2,
          maxZoom: 28
        }),
        vectorLayer
      ],
      view: new ol.View({
        center: center ? fromLonLat([center.lon, center.lat]) : [0, 0],
        zoom: zoom ?? 4,
        maxZoom: 19
      }),
      target: mapElement?.current || undefined
    });

    setMap(initialMap);

    if(marker){
      var iconFeature = new ol.Feature({
        geometry: new Point(fromLonLat([marker.lon, marker.lat]))
      });
      vectorLayer?.getSource()!.addFeature(iconFeature);
    }

    if(markers){
      markers.forEach((item, i) => {
        var iconFeature = new ol.Feature({
          geometry: new Point(fromLonLat([item.lon, item.lat])),
          id: item.id
        });
        iconFeature.setId(item.id)
        vectorLayer?.getSource()!.addFeature(iconFeature);
      });
    }


    return () => {
      initialMap.setTarget(undefined);
    };
  }, [])

  return (
    <MapWrapper ref={mapElement} />
  );
};
