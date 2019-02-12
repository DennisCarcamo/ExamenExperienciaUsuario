import React, { Component } from 'react';
import LogoHeader from './LogoNest.png';

class Logo extends Component {
    render() {
        return(
            <div className="Logo">
                <img src={LogoHeader} alt="Logo" />        
            </div>
          );
    }
}

export default Logo;