import React from 'react';
import '../styles/InfoPanels.css';

function InfoPanels() {
  return (
    <div className="info-panels">
      <div className="panel">
        <h3>Unidades</h3>
        <p>Activas: 10</p>
        <p>Inactivas: 5</p>
      </div>
      <div className="panel">
        <h3>Información / Unidad</h3>
        <p>km/h: 35</p>
        <p>RPM: 1800</p>
        <p>Calificación: 78</p>
      </div>
      <div className="panel">
        <h3>Estado de la unidad</h3>
        <p>OK: 5</p>
        <p>Servicio: 10</p>
      </div>
    </div>
  );
}

export default InfoPanels;
