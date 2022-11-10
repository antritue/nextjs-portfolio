import React from 'react';
import Navbar from './Navbar';
import { header } from '../portfolio';

const Header = () => {
  const { title } = header;

  return (
    <header className='header center'>
      <h3>{title}</h3>
      <Navbar />
    </header>
  );
};

export default Header;
