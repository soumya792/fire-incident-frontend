import { Flame } from 'lucide-react'

export default function Header({ subtitle }) {
  return (
    <header className="panel-header">
      <div className="brand">
        <Flame className="icon-large" />
        <span>Fire Incident System</span>
      </div>
      {subtitle && <div className="text-xs text-zinc-400">{subtitle}</div>}
    </header>
  )
}
