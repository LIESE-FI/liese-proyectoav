import React from 'react';
import '../styles/Sidebar.css';

const units = [
  { id: 1, name: "Rosa García Ángel Joshua", status: "OK" },
  { id: 2, name: "Saúl de las Nieves", status: "Service" },
  // Add more units as needed...
];

// Make buttons for each unit

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Búsqueda</h2>
      <ul>
        
        {units.map((unit) => (
          <li key={unit.id}>
            <button>{unit.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
