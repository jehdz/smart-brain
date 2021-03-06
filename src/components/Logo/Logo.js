import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
// import brain from './brain.png'
// import chip from './chip.svg'
import brain from './AI-logo.svg'

const Logo = () => {
    return (
        <div className="ma4 mt0">

            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1 center"> <img style={{paddingTop: '5px', height: 128, width: 128  }} alt='logo' src={brain} /> </div>
                <div className="Tilt-inner pa1 center"> <h1> Smart brain</h1></div>
            </Tilt>

        </div>


    );
}

export default Logo