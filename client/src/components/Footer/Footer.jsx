import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import footerItems from '../../constants/footerItems';
import Logo from '../../images/logos/logo_white.svg';
import SocialContainer from '../SocialMedia/SocialContainer';

export default function Footer() {
  return (
    <footer className="cfl-footer">
      <div className="cfl-footer-header">
        <span className="cfl-nav__logo">
          <NavLink to="/">
            <img
              width="50"
              height="50"
              src={Logo}
              alt="CFL logo"
              className="logo"
            />
          </NavLink>
        </span>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="cfl-footer-list flex-centered">
        {footerItems.map((item) => (
          <li key={item.id} className="cfl-footer-item">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <SocialContainer />

      <div className="cfl-copyright">
        All contents of the cflbyfans.com excluding publicly sourced documents
        are Copyright &copy; 2022 CFL ENTERPRISES LP. All rights reserved.
      </div>
    </footer>
  );
}
