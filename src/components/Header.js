import { Person, Search } from '@mui/icons-material';
import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <nav className='header'>
      <img
        className='header__logo'
        src='https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png'
        alt='app logo'
      />
      <ul>
        <li>TV Shows</li>
        <li>Originals</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Premium</li>
        <li>Games</li>
      </ul>
      <Search fontSize='large' />
      <Person fontSize='large' />
    </nav>
  );
};

export default Header;
