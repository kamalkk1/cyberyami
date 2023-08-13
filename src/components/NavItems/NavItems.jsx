import React from 'react'
import styles from './NavItems.module.css';

const NavItems = () => {
  return (
    <>
    <form className={styles.wrapper}>
    <div className={styles.navitems}>
        <span>Academia</span>
        <span>CTF Warriors</span>
        <span>Business Solutions</span>
        <span>Resources</span>
      </div>
    </form>
    </>
  )
}

export default NavItems;