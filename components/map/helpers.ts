import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style, Icon, Fill } from 'ol/style';

export const vectorLayer = new VectorLayer({
  source: new VectorSource({}),
  style: [
    new Style({
      stroke: new Stroke({
        color: '#555555',
        width: 4
      }),
      fill: new Fill({
        color: 'rgba(0, 0, 0, 0.3)'
      })
    }),
    new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/images/pin.png',
        scale: 10
      })
    })
  ],
  zIndex: 20
});