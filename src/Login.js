import React from 'react';
import './App.css';

function Login() {
return (
        
    <>
    <div className="Login-Page">
        <h1>Little Lemon</h1>
        <h2>Login</h2>

        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <div aria-label="On Click" role="button" onClick={handleClick}>
                {<button type="submit">Submit</button>}
            </div>

        </form>

    </div>
    </>
);
}

export default Login;