import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import menu from '../images/menu.png';
import saturn from '../images/saturn.png';

const Navbar = () => {
  const navBar = useRef(null);
  const navContainer = useRef(null);
  const separator = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      navBar.current.classList.add('toggledNav');
      navContainer.current.classList.add('alignTop');
      separator.current.style.display = 'none';
    } else {
      navBar.current.classList.remove('toggledNav');
      navContainer.current.classList.remove('alignTop');
      separator.current.style.display = 'block';
    }
  };
  return (
    <nav id="nav" ref={navContainer}>

      <div className="logo_title_container">
        <img className="logo" src={saturn} alt="" />
        <h3 className="fontW400 margin0">Space Travelers&apos; Hub</h3>
      </div>

      <div>

        <div className="mobileShow">
          <button id="menuImg" type="button" onClick={handleClick}>
            <img id="menu-img" src={menu} alt="This is a menu logo" />
          </button>
        </div>

        <ul className="desktopShow NavBar_ul" ref={navBar}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : ' ')} to="/"> Rockets</NavLink>
          </li>
          <li><NavLink to="/Missions">Missions</NavLink></li>
          <li className="profileLi">
            <div ref={separator} className="spearator" />
            <NavLink className={({ isActive }) => (isActive ? 'active' : ' ')} to="/Profile"> Profile </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};
export default Navbar;
