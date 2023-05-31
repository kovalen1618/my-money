import React from 'react'

import { Link } from 'react-router-dom'

import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import styles from './Navbar.module.css'

function Navbar() {
  const { logout } = useLogout();
  // Whenever 'user' changes, the Navbar() function gets reevalulated
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney</li>

            {!user && (
              // The fragment element is required because conditionals can only work with one root element
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}

            {user && (
              <>
                <li>Hello, {user.displayName}</li>
                <li>
                  <button className="btn" onClick={logout}>Logout</button>
                </li>
              </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar