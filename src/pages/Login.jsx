import { useState } from 'react'

export default function Login({ onLogin }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (onLogin) onLogin({ user })
  }

  return (
    <main style={{padding:24}}>
      <h1>Login</h1>
      <form onSubmit={submit} style={{maxWidth:360}}>
        <label style={{display:'block',marginBottom:8}}>
          Username
          <input value={user} onChange={(e)=>setUser(e.target.value)} style={{width:'100%'}} />
        </label>
        <label style={{display:'block',marginBottom:8}}>
          Password
          <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} style={{width:'100%'}} />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}
