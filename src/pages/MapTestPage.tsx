
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PassMapPage from './PopUp';
import PopUp from './PopUp';
import EventPage from './Event';

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapTestPage: React.FC = () => {
  const position: [number, number] = [-6.914744, 107.60981]; // Bandung coordinates [lat, lng]

  return (
   <>
   <EventPage />

    {/* Uncomment to use PassMapPage */}
    {/* <PassMapPage /> */}
   </>
  );
};

export default MapTestPage;
