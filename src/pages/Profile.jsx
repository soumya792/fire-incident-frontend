export default function Profile() {
  const user = { name: 'Admin', role: 'Administrator' }
  return (
    <main style={{padding:24}}>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </main>
  )
}
