export default function BottomNavigation() {
  return (
    <nav className="bottom-nav" style={{display: 'flex', gap: 8, padding: 12}}>
      <button className="btn">Dashboard</button>
      <button className="btn">Assets</button>
      <button className="btn">Incidents</button>
      <button className="btn">Settings</button>
    </nav>
  )
}
