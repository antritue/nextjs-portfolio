import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a
            href="#projects"
            onClick={toggleNavList}
            className="link link--nav"
          >
            Projects
          </a>
        </li>

        <li className="nav__list-item">
          <a href="#skills" onClick={toggleNavList} className="link link--nav">
            Skills
          </a>
        </li>

        <li className="nav__list-item">
          <a href="#contact" onClick={toggleNavList} className="link link--nav">
            Contact
          </a>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
