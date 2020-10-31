import React from 'react';
import './header.css';
import icon from '../../images/icon_globe.png';

export default function Header() {
  return (
    <div id='header-container'>
      <div id='header-visit-card'>
        <h1 id='header-title'>Marc Lingg</h1>

        <div className='info-container'>
          <p className='text-info'>Rue des Arpenteurs, 6</p>

          <div className='line-container'>
            <p className='text-info'>Paris, 18e</p>
            <p className='text-info'>75001</p>
          </div>

          <div className='line-container'>
            <p className='text-info'>Mail</p>
            <span className='text-info-line'></span>
            <p className='text-info'>Phone</p>
          </div>

          <div className='line-container justified'>
            <a
              href='https://www.instagram.com/marc.lingg/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-info'
            >
              Go to instagram
            </a>
          </div>
        </div>
      </div>

      <img src={icon} alt='Marc Lingg' id='header-icon' />
    </div>
  );
}
