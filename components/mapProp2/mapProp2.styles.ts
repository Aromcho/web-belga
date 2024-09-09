
import styled from '@emotion/styled';

// Contenedor para el mapa y el botón
export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;  // Ajusta la altura según sea necesario
  overflow: hidden;
  
`;

// Estilo del mapa, inicialmente oculto
export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: height 0.3s ease-in-out;
`;

// Imagen de marcador de posición
export const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/map2.png'); // Asegúrate de que la ruta sea correcta
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

// Icono del mapa
export const MapIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 5px;
`;

