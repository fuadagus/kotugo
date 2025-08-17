import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';
import FirstPage from './pages/FirstPage';
import SignPage from './pages/SignInPage';
import PassanPage from './pages/PassanPage';
import DriverPage from './pages/SupirPage';
import EndPage from './pages/EndPage';
import MapTestPage from './pages/MapTestPage';
// import PassMapPage from './pages/PassMapPage';
// import MapTestPage from './pages/MapTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<FirstPage />} />
          <Route path="signin" element={<SignPage />} />
          <Route path="passenger" element={<PassanPage />} />
          <Route path="driver" element={<DriverPage />} />
          <Route path="end" element={<EndPage />} />
          <Route path="map" element={<MapTestPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;