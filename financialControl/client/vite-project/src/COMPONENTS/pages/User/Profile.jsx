import React, { useState, useEffect } from 'react'

import styles from './Profile.module.css'
import formStyles from '../../form/Form.module.css';

import Input from './../../form/Input';

const Profile = () => {

    const [user, setUser] = useState({})

    function onFileChange(e) {

    }

    function handleChange(e) {

    }

    return (


        <section>
            <div  className={styles.profile_header}>
                <h1>Profile</h1>
                <p>Preview Image</p>
            </div>

            <form className={formStyles.form_container}>
                <Input
                    text="Image"
                    type="file"
                    name="image"
                    handleOnChange={onFileChange}

                />

                <Input
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Type your email address"
                    handleOnChange={handleChange}
                    value={user.email || ''}
                />

                <Input
                    text="Name"
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    handleOnChange={handleChange}
                    value={user.name || ''}
                />

                <Input
                    text="Phone"
                    type="text"
                    name="phone"
                    placeholder="Type your phone"
                    handleOnChange={handleChange}
                    value={user.phone || ''}
                />

                <Input
                    text="Password"
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    handleOnChange={handleChange}

                />

                <Input
                    text="Confirm password"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm your passsword"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Edit" />
            </form>
        </section>
    )
}

export default Profile