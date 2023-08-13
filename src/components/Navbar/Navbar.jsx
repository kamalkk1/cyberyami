
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../NavItems/Logo';

import SignupLink from '../NavItems/SignupLink';
import LoginButton from '../NavItems/LoginButton';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  

  return (
    <nav className={styles.navbar}>
         <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        <Link to="/">
      <Logo />
      </Link>
     
            <button
              className={styles.navToggle}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FaBars />
            </button>
   
      <ul className={showMenu ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks}>
          <li>
            <Link to="/">Academia</Link>
          </li>
          <li>
            <Link to="/about">CTF Warriors</Link>
          </li>
          <li>
            <Link to="/products">Business Solutions</Link>
          </li>
          <li>
            <Link to="/contact">Resources</Link>
          </li>
          <li className={styles.navCart}> 
          <FaCartPlus />
        </li>
        <li>
          <SignupLink />
        </li>
        <li> 
          <LoginButton children="Login" />
        </li>
        </ul>
      
        
      </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
