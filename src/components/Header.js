import { Person, Search } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png'
          alt='app logo'
        />
      </Link>
      <nav className='header__nav'>
        <a>TV Shows</a>
        <a>Originals</a>
        <a>Sports</a>
        <a>Movies</a>
        <a>Premium</a>
        <a>Games</a>
      </nav>
      <Search fontSize='large' />
      <Person fontSize='large' />
    </div>
  );
};

export default Header;
