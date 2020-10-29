import React from 'react';
import Header from '../header/Header'
import background from '../../images/frieza.png'
import './homePage.css'
function HomePage() {
    return(
        <div className="homePage_container">
            <Header className="homePage_header"/>
            <img src={background} alt="frieza" className="image_container"/>
        </div>
    )
}

export default HomePage;