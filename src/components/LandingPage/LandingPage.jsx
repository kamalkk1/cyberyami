import React from 'react'
import styles from './LandingPage.module.css';
import CourseContent from '../CourseContent/CourseContent';
const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.info}>
        <h6>Skillup</h6>
        <p>Skillup/Burpsuite Bootcamp</p>
        <h2>Burpsuite Bootcamp</h2>
        <p>BurpSuite is an all-in-one tool used for WAPT. There are various functions that the burp suite can perform that help one in the process of pen-testing a website. We can intercept traffic, such as requests and responses sent to web servers, and also perform various analyses on those requests. BurpSuite is used by professionals in the field of testing security for websites. BurpSuite comes in 2 versions: professional, a paid product, and the free, Community edition.</p>
        <br></br>
        <span>⭐⭐⭐⭐⭐ 5.0</span>
        <br></br>
        <button>Login to Enroll</button>
        <br></br>
        <br></br>
        <span>Beginner</span> | <span>38 Students Enrolled</span>
    </div>
    <CourseContent />
    </div>
  )
}

export default LandingPage