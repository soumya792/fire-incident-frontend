export default function Sidebar({ items = [] }) {
  return (
    <aside style={{width:220,padding:16}}>
      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        {items.length === 0 ? (
          <>
            <a href="#" className="text-xs">Dashboard</a>
            <a href="#" className="text-xs">Assets</a>
            <a href="#" className="text-xs">Incidents</a>
            <a href="#" className="text-xs">Settings</a>
          </>
        ) : (
          items.map((it) => (
            <a key={it.key || it.label} href={it.href || '#'} className="text-xs">{it.label}</a>
          ))
        )}
      </nav>
    </aside>
  )
}
