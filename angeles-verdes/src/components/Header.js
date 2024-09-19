import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="icon-group">
        <img src="logoAVBlanco.png" alt="Logo Angeles Verdes" />
        <img src="lieseLogoBlanco.png" alt="Logo Liese" />
      </div>
      <p>Ángeles Verdes</p>
    </header>

  );
}

export default Header;
