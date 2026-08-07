export default function DashboardCard({ title, value, children }) {
  return (
    <div className="stat-card">
      <p className="text-[10px] text-zinc-400">{title}</p>
      <div style={{marginTop:8}}>
        <strong style={{fontSize: '1.25rem'}}>{value}</strong>
      </div>
      {children}
    </div>
  )
}
