import React from 'react';
import styles from '../layout/RadiusImage.module.css';

const RadiusImage = ({ src, alt, width }) => {
    return (

        <img className={`${styles.radius_image} ${styles[width]} `}
            src={src}
            alt={alt}
        />
    )
}

export default RadiusImage 