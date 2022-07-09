import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Stroke, Style, Icon, Fill } from 'ol/style';

export const vectorLayer = new VectorLayer({
  source: new VectorSource({}),
  style: [
    new Style({
      image: new Icon({
        src: '/images/pin.svg'
      })
    })
  ],
  zIndex: 20
});