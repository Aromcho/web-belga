import React from 'react';
import * as ol from 'ol';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import { Point } from 'ol/geom';

import {
  MapWrapper
} from './map.styles';
import { vectorLayer } from './helpers';

export interface MapProps {
  center?: { lon: number; lat: number };
  marker?: { lon: number; lat: number };
  zoom?: number;
}

export const Map = ({center, zoom, marker}: MapProps) => {

  const [, setMap] = React.useState<ol.Map>();
  const mapElement = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const initialMap = new ol.Map({
      layers: [
        new TileLayer({
          source: new OSM(),
          visible: true,
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
        geometry: new Point(fromLonLat([marker.lon,marker.lat]))
      });
      vectorLayer?.getSource()!.addFeature(iconFeature);
    }


    return () => {
      initialMap.setTarget(undefined);
    };
  }, [])

  return (
    <MapWrapper ref={mapElement}>

    </MapWrapper>
  );
};
