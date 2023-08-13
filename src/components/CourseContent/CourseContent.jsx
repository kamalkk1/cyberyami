import React, {useState} from 'react'
import styles from './CourseContent.module.css';
const CourseContent = () => {

    const [dropdownStates, setDropdownStates] = useState({
        introduction: false,
    whatIsBurpsuite: false,
    settingUp: false,
    features: false,
    browser: false,
    scoping: false,
    sitemap: false,
    extentions: false
    });

    const toggleDropdown = (itemName) => {
        setDropdownStates((prevState) => ({
          ...prevState,
          [itemName]: !prevState[itemName],
        }));
      };
  return (
    <div className={styles.wrapper}><h2>Course Content</h2>
        <div className={styles.content}>
           <ol>
            <li onClick={() => toggleDropdown('introduction')} > <span>1. Introduction</span>
            <span className={styles.dropdownArrow}>{dropdownStates.introduction ? '▼' : '►'}</span>
            {dropdownStates.introduction && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('whatIsBurpsuite')}><span>2. What is Burpsuite</span>
            <span className={styles.dropdownArrow}>{dropdownStates.whatIsBurpsuite ? '▼' : '►'}</span>

            {dropdownStates.whatIsBurpsuite && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('settingUp')}><span>3.Setting Up Burpsuite</span>
            <span className={styles.dropdownArrow}>{dropdownStates.settingUp ? '▼' : '►'}</span>

            {dropdownStates.settingUp && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('features')}><span>4.Features of Burpsuite</span>
            <span className={styles.dropdownArrow}>{dropdownStates.features ? '▼' : '►'}</span>

            {dropdownStates.features && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('browser')}><span>5.Burpsuite Browser</span>
            <span className={styles.dropdownArrow}>{dropdownStates.browser ? '▼' : '►'}</span>

            {dropdownStates.browser && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('scoping')}><span>6.Scoping</span>
            <span className={styles.dropdownArrow}>{dropdownStates.scoping ? '▼' : '►'}</span>

            {dropdownStates.scoping && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>

            <li onClick={() => toggleDropdown('sitemap')}><span>7.Sitemap</span>
            <span className={styles.dropdownArrow}>{dropdownStates.sitemap ? '▼' : '►'}</span>

            {dropdownStates.sitemap && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
            <li onClick={() => toggleDropdown('extentions')}><span>8.Burpsuite Extension</span>
            <span className={styles.dropdownArrow}>{dropdownStates.extentions ? '▼' : '►'}</span>

            {dropdownStates.extentions && (
              <ul className={styles.item}>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            )}</li>
           </ol>
        </div>
        <div className={styles.slideBar}></div>
    </div>
    
  )
}

export default CourseContent