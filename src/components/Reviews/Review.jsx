import React from 'react';
import styles from './Review.module.css';
import avatar from '../assets/avatar.webp'

const Review = () => {
  return (
    <section className={styles.reviewSection}>
     
      <div className={styles.leftContent}>
        <h3 id="review-section">Review</h3>
        <div className={styles.user}>
          <img src={avatar} alt="User" className={styles.userImage} />
          <div className={styles.userInfo}>
            <p className={styles.userName}>John Doe</p>
            <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <p className={styles.comment}>Awesome, liked it very much.</p>
        <a href="#" className={styles.prevLink}>Prev</a>
      </div>
      <div className={styles.rightContent}>
        <span className={styles.rating}>5.0</span>
        <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
        <span className={styles.ratingCount}>(1 rating)</span>
        <a href="#" className={styles.nextLink}>Next</a>
      </div>
    </section>
  );
};

export default Review;
