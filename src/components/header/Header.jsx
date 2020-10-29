import React from "react";
import "./header.css";
import icon from "../../images/icon_globe.png";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_card_container">
        <p className="text_h1">Marc Lingg</p>
        <img src={icon} alt="Marc Lingg" className="header_icon" />
      </div>
      <div className="info_container">
        <p className="text_info">Rue des Arpenteurs, 6</p>
        <div className="line_container">
          <p className="text_info">Paris, 18e</p>
          <p className="text_info">75001</p>
        </div>
        <p className="text_info">marclingg@gmail.com</p>
        <div className="line_container">
          <p className="text_info">go to</p>
          <a href="https://www.instagram.com/marc.lingg/" className="link">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
