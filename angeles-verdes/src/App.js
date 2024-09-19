import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MapSection from './components/MapSection';
import InfoPanels from './components/InfoPanels';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="map-info-container">
          <MapSection />
          <InfoPanels />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
