import React, { useContext, useState } from 'react';
import Input from '../../form/Input';
import styles from '../../form/Form.module.css';
import { Link } from 'react-router-dom';

/* Contexts */
import { Context } from '../../../CONTEXT/UserContext';


function Register() {

    const [user, setUser] = useState({})
    const { register } = useContext(Context)


    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()

        register(user)
    }


    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Name"
                    type="text"
                    name="name"
                    placeholder="Choose your name"
                    handleOnChange={handleChange}
                />


                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Type your your email address"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Phone"
                    type="text"
                    name="phone"
                    placeholder="Type your phone number"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Password"
                    type="password"
                    name="password"
                    placeholder="Type your your password"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Confirme your password"
                    type="password"
                    name="confirmpassword"
                    placeholder="Type the same password again"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Register" />
            </form>
            <p>Do you already have an account? <Link to='/login'>Click here</Link></p>
        </section>

    );
}


export default Register;