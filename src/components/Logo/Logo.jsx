import React from 'react';
import logo from '../../images/logo-spotify.svg';

import './Logo.scss';

const Logo = () => (
  <figure className="logo">
      <img src={logo} alt="logo do spotify" />
  </figure>

);

export default Logo;
