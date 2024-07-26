import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ASSETS/img/logo.png';
import styles from './Navbar.module.css';


const Navbar = () => {
      return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
              <Link to='/'><img src={Logo} alt="Financial Control" />
                <h2>Financial Control</h2>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/'>Financial Control</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar