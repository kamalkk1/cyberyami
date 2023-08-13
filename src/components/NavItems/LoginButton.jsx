import React from 'react';
import styles from './LoginButton.module.css';


const LoginButton = ({children}) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default LoginButton;