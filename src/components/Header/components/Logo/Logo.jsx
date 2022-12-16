import React from 'react';
import Logostyles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={Logostyles.logo}>
      <img
        src='https://www.epam.com/etc/designs/epam-core/images/common/logo.png'
        alt='epam_logo'
      />
    </div>
  );
};

export default Logo;
