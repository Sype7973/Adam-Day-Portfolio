import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const basePath = '/Sype7973/Adam-Day-Portfolio';

  return (
    <nav>
      <ul>
        <li>
          <Link to={basePath + '/'}>Home</Link>
        </li>
        <li>
          <Link to={basePath + '/about'}>About Me</Link>
        </li>
        <li>
          <Link to={basePath + '/resume'}>Resume</Link>
        </li>
        <li>
          <Link to={basePath + '/portfolio'}>Portfolio</Link>
        </li>
        <li>
          <Link to={basePath + '/contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}