import React from 'react'
import { VscMail, VscLock } from 'react-icons/vsc';
import '../../styles/login.css'

function LoginPage() {
  return (
  <section>
    <div className="login-box">
        <form action="">
            <h2>Login</h2>
            <div className="input-box">
                <span className="icon"><VscMail /></span>
                <div className="input-wrapper">
                    <input type="email" id="email" required />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="input-box">
                <span className="icon"><VscLock /></span>
                <div className="input-wrapper">
                    <input type="password" id="password" required />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="remember-forgot">
                <label htmlFor="checkbox">
                    <input type="checkbox" />
                    Remember me
                </label>
                <a href="#">Forgot Password?</a>
            </div>
            <div className="btn-submit">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</section>
  )
}

export default LoginPage