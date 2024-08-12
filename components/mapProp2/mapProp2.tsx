import React, { useEffect, useRef, useState } from 'react';
import * as ol from 'ol';
import { XYZ } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import { MapWrapper } from './mapProp2.styles';
import { normalStyle, hgihStyle } from './helpers';

export interface MapProps {
  center?: { lon: number; lat: number };
  marker?: { lon: number; lat: number };
  markers?: { lon: number; lat: number, high?: boolean, id: string }[];
  zoom?: number;
}

export const MapProp2 = ({ center, zoom, marker, markers }: MapProps) => {
  const [stMap, setMap] = useState<ol.Map>();
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vectorLayer = new VectorLayer({
      source: new VectorSource({}),
      style: normalStyle,
      zIndex: 20,
    });

    const initialMap = new ol.Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png`,
          }),
          preload: Infinity,
          zIndex: 2,
          maxZoom: 28,
        }),
        vectorLayer,
      ],
      view: new ol.View({
        center: center ? fromLonLat([center.lon, center.lat]) : [0, 0],
        zoom: zoom ?? 4,
        maxZoom: 19,
      }),
      target: mapElement.current || undefined,
    });

    if (marker) {
      const iconFeature = new ol.Feature({
        geometry: new Point(fromLonLat([marker.lon, marker.lat])),
      });
      vectorLayer.getSource()?.addFeature(iconFeature);
    }

    if (markers) {
      markers.forEach((item) => {
        const iconFeature = new ol.Feature({
          geometry: new Point(fromLonLat([item.lon, item.lat])),
          id: item.id,
        });
        iconFeature.setId(item.id);
        vectorLayer.getSource()?.addFeature(iconFeature);
      });
    }

    setMap(initialMap);

    return () => {
      initialMap.setTarget(undefined);
    };
  }, [center, zoom, marker, markers]);

  return (
  <MapWrapper ref={mapElement} />);
};
