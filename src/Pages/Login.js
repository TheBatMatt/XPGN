import React from 'react';

const Login = () => {
    return (
        <div>
            <form id="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" className="username" name="username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="password" name="password" />
                </div>
            </form>
        </div>
    )

}

export default Login;