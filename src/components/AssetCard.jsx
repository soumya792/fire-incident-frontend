export default function AssetCard({ name, status, details }) {
  return (
    <div className="stat-card">
      <p className="text-[10px] text-zinc-400">{name}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <strong>{status}</strong>
        {details && <span className="text-[10px] text-zinc-400">{details}</span>}
      </div>
    </div>
  )
}
