
import React, { useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnVhZGFndXNzYWxpbSIsImEiOiJjbGcyZ2Q1ZXMwMHZ2M2RuMW9uOHZ0cDNoIn0.odEIHnmRUwKd2wUq_nBowQ';

const SimpleMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [107.60981, -6.914744],
      zoom: 13,
    });
    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '100%', height: '300px', borderRadius: '1rem' }} ref={mapContainer} />
  );
};

export default SimpleMap;
