/*
* \brief Login page for the user
* */

import { useState, type FormEvent } from 'react'
import './Login.css'

function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        // TODO: Connect to your backend authentication API
        console.log(isLogin ? 'Login submitted' : 'Signup submitted')
    }

    function switchMode() {
        setIsLogin(!isLogin)
        setPassword('')
        setConfirmPassword('')
        setError('')
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>{isLogin ? 'Welcome back' : 'Create an account'}</h1>

                <p className="auth-subtitle">
                    {isLogin
                        ? 'Log in to track your performance'
                        : 'Start tracking your progress today'}
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete={isLogin ? 'current-password' : 'new-password'}
                            minLength={8}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    )}

                    {error && <p className="auth-error" role="alert">{error}</p>}

                    <button className="auth-submit" type="submit">
                        {isLogin ? 'Log in' : 'Create account'}
                    </button>
                </form>

                <p className="auth-switch">
                    {isLogin
                        ? "Don't have an account?"
                        : 'Already have an account?'}

                    <button type="button" onClick={switchMode}>
                        {isLogin ? 'Sign up' : 'Log in'}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Login