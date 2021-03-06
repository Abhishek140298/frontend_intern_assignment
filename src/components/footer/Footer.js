import React from 'react';
import {
  BsTelephoneFill,
  BsLinkedin,
  BsGeoAltFill,
  BsFacebook,
} from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (
    <div className='main_footer_div'>
      <span className='footer_span'>
        <BsTelephoneFill />
        contact us:<br/> 6568787546
      </span>
      <span className='footer_span'>
        <BsGeoAltFill />
        address: <br/>mukherjiNagar,<br/>NewDelhi
      </span>
      <span className='footer_span'>
        <BsLinkedin />
        LinkedIn
      </span>
      <span className='footer_span'>
        <BsFacebook />
        Facebook
      </span>
    </div>
  );
};
export default Footer;
