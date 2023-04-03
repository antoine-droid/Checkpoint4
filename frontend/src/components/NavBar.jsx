
import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"
import styles from "../styles/NavBar.module.scss";


function NavBar() {
const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

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
  <nav className={styles["nav-bar"]}>
    {(toggleMenu || screenWidth > 500) && (
       <ul className={styles["list-uls"]}>
      <li>
        <NavLink  className={styles["menu-list"]} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={styles["menu-list"]} to="/familly">Royal family</NavLink>
      </li>
      <li>
        <NavLink className={styles["menu-list"]} to="/kingdom">Kingdom assets</NavLink>
      </li>
      
      <li>
        <NavLink className={styles["menu-list"]} to="/contact">Contact</NavLink>
      </li>
    </ul>
    )}
    <button onClick={toggleNav} className={styles["nav-btn"]} >BTN</button>
    </nav>
  );
}
export default NavBar;