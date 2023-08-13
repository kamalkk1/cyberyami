import React from 'react'
import styles from './CourseInclude.module.css'
import cert from '../assets/cert.svg'
import lab from '../assets/lab.svg'
import theory from '../assets/theory.svg'
const CourseInclude = () => {
  return (
    <div className={styles.wrapper}>
       <h3>This course will includes:</h3>
       <div className={styles.course}>
  <div className={styles.icon}>
    <div className={styles.iconBlock}>
      <img src={cert} alt='certificate'/>
      <p>Self paced - Pragmatic Topics</p>
    </div>
    <div className={styles.iconBlock}>
      <img src={lab} alt='certificate'/>
      <p>Hands-on Practice Labs</p>
    </div>
    <div className={styles.iconBlock}>
      <img src={theory} alt='certificate'/>
      <p>Certificate of Completion</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default CourseInclude