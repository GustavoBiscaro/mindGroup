import React, { useState } from 'react';
import Input from '../../form/Input';
import styles from '../../form/Form.module.css'

const Register = () => {
    function handleChange(event) {

    }


    return (
        <section>
            <h1>Register User</h1>             
            <form>
                <Input
                    text="Name"
                    type="text"
                    name="name"
                    placeholder="Type your name"
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
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Type your your email address"
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
        </section>
    );
}

export default Register