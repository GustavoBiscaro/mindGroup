import React, { useState } from 'react';
import styles from './Message.module.css';

const Message = () => { 
    const [type, setType] = useState("")

    return (
        <div className={`${styles.message} ${styles[type]}`}>
            Minha Mensagem
        </div>
    )
}

export default Message;
