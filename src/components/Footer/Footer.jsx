import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSocial}>
        <div className={styles.companyLogo}>
          <img src={logo} alt="Company Logo" />
        </div>
        <div className={styles.socialMedia}>
          {/* Add your social media handles here */}
        </div>
      </div>
      <div className={styles.resources}>
        <h4>Resources</h4>
        <ul>
          <li>Leaderboard</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className={styles.legals}>
        <h4>Legals</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className={styles.businesses}>
        <h4>For Businesses</h4>
        <ul>
          <li>Business Solutions</li>
        </ul>
      </div>
      
    </footer>
  
      
  );
};

export default Footer;
