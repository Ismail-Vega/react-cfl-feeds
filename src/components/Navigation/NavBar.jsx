import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logos/logo_white.svg';

const ITEMS = [
  { id: 1, path: '/games', value: 'Games' },
  { id: 2, path: '/players', value: 'Players' },
  { id: 3, path: '/standings', value: 'Standings' },
  { id: 4, path: '/teams', value: 'Teams' },
  { id: 5, path: '/seasons', value: 'Seasons' },
];

// handle active item with location path value instead to get the correct value after reload
function NavBar(props) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className="cfl-nav d-flex">
      <button class="cfl-nav__hamburger-icon" aria-label="Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="cfl-nav__list flex-centered">
        {ITEMS.map((item) => (
          <li
            key={item.id}
            className={`cfl-nav__list-item${
              activeItem === item.id ? ' icon-marker' : ''
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <NavLink to={item.path}>{item.value}</NavLink>
          </li>
        ))}
      </ul>

      <span className="cfl-nav__logo" onClick={() => setActiveItem(null)}>
        <NavLink exact to="/">
          <img
            width="50"
            height="50"
            src={Logo}
            alt="CFL logo"
            className="logo"
          />
        </NavLink>
      </span>
    </nav>
  );
}

export default NavBar;
