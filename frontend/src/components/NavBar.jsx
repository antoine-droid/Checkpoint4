
import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../styles/NavBar.module.scss";
import logo from "../assets/logo.png"


function NavBar() {
const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const closeNav = () => {
    setToggleMenu(false);
  };

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

   return (
    <nav className={styles['nav-bar']}>
      
      {(toggleMenu || screenWidth > 500) && (
        <ul className={styles['list-uls']}>
          <img src={logo} alt="Logo" className={styles['nav-bar-logo']} />
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/"
              onClick={closeNav}
            >
              Home
            </NavLink>
          </li>
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/registration"
              onClick={closeNav}
            >
              Registration
            </NavLink>
          </li>
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/connexion"
              onClick={closeNav}
            >
              Connexion
            </NavLink>
          </li>
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/familly"
              onClick={closeNav}
            >
              Royal family
            </NavLink>
          </li>
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/kingdom"
              onClick={closeNav}
            >
              Kingdom assets
            </NavLink>
          </li>
          <li className={styles['li-list']}>
            <NavLink
              className={styles['menu-list']}
              to="/contact"
              onClick={closeNav}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className={styles['nav-btn']}>
        Menu
      </button>
    </nav>
  );
}
export default NavBar;