import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logos/logo_white.svg';

const ITEMS = [
  { id: 3, path: '/', value: 'Logo' },
  { id: 1, path: '/games', value: 'Games' },
  { id: 2, path: '/players', value: 'Players' },
  { id: 4, path: '/standings', value: 'Standings' },
  { id: 5, path: '/teams', value: 'Teams' },
  { id: 6, path: '/seasons', value: 'Seasons' },
];

// handle active item with location path value instead to get the correct value after reload
function NavBar(props) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav>
      <div className="nav-wrapper d-flex">
        <ul className="nav-list flex-centered">
          {ITEMS.map((item, index) =>
            item.value !== 'Logo' ? (
              <li
                key={item.id}
                className={`nav-item${
                  activeItem === item.id ? ' icon-marker' : ''
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <NavLink to={item.path}>{item.value}</NavLink>
              </li>
            ) : (
              <li
                key={item.id}
                className="brand-logo"
                onClick={() => setActiveItem(null)}
              >
                <NavLink exact to={item.path}>
                  <img
                    width="50"
                    height="50"
                    src={Logo}
                    alt="CFL logo"
                    className="logo"
                  />
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
