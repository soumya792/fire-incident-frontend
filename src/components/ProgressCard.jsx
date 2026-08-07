export default function ProgressCard({ title, percent = 0 }) {
  const width = Math.max(0, Math.min(100, percent)) + '%'
  return (
    <div className="stat-card">
      <p className="text-[10px] text-zinc-400">{title}</p>
      <div style={{marginTop:8}}>
        <div style={{background:'#0b1220',borderRadius:8,height:10,overflow:'hidden'}}>
          <div style={{width,background:'#dc2626',height:'100%'}} />
        </div>
        <div className="text-xs text-zinc-400" style={{marginTop:6}}>{percent}%</div>
      </div>
    </div>
  )
}
