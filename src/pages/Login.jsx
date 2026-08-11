import { useState } from 'react'

export default function Login({ onLogin }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (onLogin) onLogin({ user })
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">F</div>
        <div className="login-heading">
          <h1>Login</h1>
          <p>Access Fire Incident System operations and coordination tools.</p>
        </div>

        <form onSubmit={submit} className="login-form">
          <div className="input-group">
            <label>Username</label>
            <div className="input-wrapper">
              <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter your username" />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your password" />
            </div>
          </div>

          <button type="submit" className="login-button">Sign in</button>
        </form>

        <p className="login-footer">Need help? Contact support@fireops.com</p>
      </section>
    </main>
  )
}
