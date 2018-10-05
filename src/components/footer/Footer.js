// Third party
import React from 'react';

// Assets
import './Footer.css';


const Footer = () => (
  <div className="footer">
    Built by&nbsp;
    <a
      href="http://www.danflorio.com"
      className="footer__link"
      target="_blank"
      rel="noopener noreferrer">
      Dan Florio
    </a>
    , using the&nbsp;
    <a
      href="https://openweathermap.org/"
      className="footer__link"
      target="_blank"
      rel="noopener noreferrer">
      Open Weather Map API
    </a>.
  </div>
);

export default Footer;