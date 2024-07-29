import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ASSETS/img/logo.png';
import styles from './Navbar.module.css';

/* Context */
import { Context } from '../../CONTEXT/UserContext';


const Navbar = () => {

    const { authenticated, logout } = useContext(Context)
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
                {
                    authenticated ? (

                        <>
                           <li>
                                <Link to="/user/profile">Profile</Link>
                           </li>
                           <li onClick={logout}>Exit</li>
                        </>

                    ) : (

                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>
                    )
                }

            </ul >
        </nav >
    );
}

export default Navbar