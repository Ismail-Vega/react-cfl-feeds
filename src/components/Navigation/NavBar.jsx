import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../images/logos/logo_white.svg';

const ITEMS = [
  { id: 1, path: '/games', value: 'Games' },
  { id: 2, path: '/players', value: 'Players' },
  { id: 3, path: '/standings', value: 'Standings' },
  { id: 4, path: '/teams', value: 'Teams' },
  { id: 5, path: '/seasons', value: 'Seasons' },
];
const CFL_NAV = JSON.parse(localStorage.getItem('cfl-nav'));

function NavBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname || null);
  const [activeMenu, setActiveMenu] = useState(CFL_NAV.activeMenu || false);

  const handleItemClick = (path) => {
    if (activeMenu) {
      setActiveMenu(false);
    }

    setActiveItem(path);
    return;
  };

  useEffect(() => {
    try {
      localStorage.setItem('cfl-nav', JSON.stringify({ activeMenu }));
    } catch (error) {
      console.log('error: ', error);
      localStorage.removeItem('cfl-nav');
    }
  }, [activeMenu]);

  return (
    <nav className="cfl-nav d-flex">
      <button
        aria-label="Hamburger Menu"
        onClick={() => setActiveMenu(!activeMenu)}
        className={`cfl-nav__hamburger-icon${activeMenu ? ' active' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        className={`cfl-nav__list flex-centered${
          activeMenu ? ' mob-vertical' : ''
        }`}
      >
        {ITEMS.map((item) => (
          <li
            key={item.id}
            className={`cfl-nav__list-item${
              activeItem === item.path ? ' icon-marker' : ''
            }`}
            onClick={() => handleItemClick(item.path)}
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
