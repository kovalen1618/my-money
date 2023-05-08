import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/login">Signup</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar