import React from 'react';
import styles from './Author.module.css';
import author from '../assets/author.webp';
const Author = () => {
  return (
    <section className={styles.aboutAuthorSection}>
      <div className={styles.leftContent}>
        <h2>About the Author</h2>
        <div className={styles.icon}>
          <img src={author} alt="Author Icon" />
        </div>
      </div>
      <div className={styles.rightContent}>
        <h3>Team CyberYami</h3>
        <p>
          CyberYami brings you a plethora of custom-designed bootcamps and courses. The learning material
          focuses on hands-on practice that is much needed in cyber security. We have included labs and
          challenges to make you understand how things work and are done in the industry. You can showcase
          your skills on your resume with our certification proving that you can apply the knowledge gained
          in a real-world scenario.
        </p>
      </div>
    </section>
  );
};

export default Author;
