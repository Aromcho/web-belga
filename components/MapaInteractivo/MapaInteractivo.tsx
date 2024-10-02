import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Ícono personalizado para el marcador
const customIcon = new L.Icon({
  iconUrl: "/images/pin.svg", // Ajusta la ruta de tu ícono
  iconSize: [38, 40],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

// Props del componente para recibir latitud, longitud y zoom
interface MapaInteractivoProps {
  lat: number;
  lng: number;
  zoom?: number;
  address: string;
}

const MapaInteractivo: React.FC<MapaInteractivoProps> = ({ lat, lng, zoom = 13, address }) => {
  // Estilo en línea para ocultar la atribución
  const mapContainerStyle = {
    height: "500px",
    width: "100%",
  };

  // Estilo en línea para ocultar el control de atribución
  const attributionStyle = `
    .leaflet-control-attribution {
      display: none !important;
    }
  `;

  // Estilos personalizados para el Tooltip
  

  return (
    <div style={mapContainerStyle}>
      {/* Inyectamos el estilo directamente */}
      <style>{attributionStyle}</style>

      <MapContainer center={[lat, lng]} zoom={zoom} style={mapContainerStyle}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          {/* Tooltip permanente con estilos personalizados */}
          <Tooltip permanent offset={[0, -40]}>
            <div>{address}</div>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapaInteractivo;
