import React, { useContext, useState } from 'react';
import Input from '../../form/Input';
import styles from '../../form/Form.module.css';
import { Link } from 'react-router-dom';

/* Contexts */
import { Context } from '../../../CONTEXT/UserContext';



function Login() {

    const [user, setUser] = useState({});
    const { login } = useContext(Context);
 


    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        login(user);
    
    }


    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>


                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Type your email address"
                    handleOnChange={handleChange}
                />


                <Input
                    text="Password"
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    handleOnChange={handleChange}
                />


                <input type="submit" value="Login" />
            </form>
            <p>Don't have an account yet? <Link to='/register'>Click here</Link></p>
        </section>

    );
}


export default Login;