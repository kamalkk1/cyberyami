import React, { useState, useEffect } from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <button className={styles.navToggle} onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <ul className={showMenu ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.navCart}>
          <FaCartPlus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
