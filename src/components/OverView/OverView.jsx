import React from 'react'
import styles from './OverView.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // Import the tick icon from react-icons

const OverView = () => {

    const handleReviewLinkClick = (e) => {
        e.preventDefault();
        const reviewSection = document.getElementById('review-section');
        if (reviewSection) {
          reviewSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className={styles.wrapper}>
        <div className={styles.overview}>
        <h4><a>OverView</a><span>|</span><span><a href="#review-section" onClick={handleReviewLinkClick}>Review</a></span></h4>
        
        <p>Overview Burpsuite bootcamp brings you a detailed, structured way of learning and practicing this tool. This tool is highly used in the industry and mainly is used for conducting WAPT i.e Web Application Penetration Testing. You will learn about every aspect and sub-tools included in the burp suite included in this bootcamp are practice labs to get your hands on the burp suite and theory lectures with interactive video demonstrations.</p>
    </div>
    <div className={styles.learn}>
        <h4>Top Skill You will Learn</h4>
        <li><FaCheckCircle className={styles.icon}/>  Understanding of Burpsuite</li>
        <li><FaCheckCircle className={styles.icon}/>  Know the tools offered by the burp suite</li>
        <li><FaCheckCircle className={styles.icon}/>  Use burp suite with ease in your testing</li>
        <li><FaCheckCircle className={styles.icon}/>  Know the difference between the pro & free edition</li>
        <li><FaCheckCircle className={styles.icon}/>  Perform full-fledged WAPT using only BurpSuite</li>
        <li><FaCheckCircle className={styles.icon}/>  Learn Real-world techniques</li>

    </div>
    </div>
  )
}

export default OverView