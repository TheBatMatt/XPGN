import React from 'react';

const Signup = () => {
    return (
        <div>
            <form id="signupForm">
                <div>
                    <label>Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="email" name="email" />
                </div>
            </form>

        </div>
    )
}

export default Signup;