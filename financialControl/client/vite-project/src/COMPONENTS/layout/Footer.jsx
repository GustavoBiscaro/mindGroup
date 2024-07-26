import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <section>
           <p><span className='bolder'>Financial Control</span> - &copy;2024<strong> - all rights reserved</strong></p>
        </section>
        </footer>
    )
}

export default Footer