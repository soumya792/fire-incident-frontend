import { Flame } from "lucide-react";

export default function Header({ subtitle }) {
  return (
    <header className="app-header">
      <div className="brand-row">
        <div className="brand-mark header-mark">
          <Flame size={18} />
        </div>
        <div>
          <p className="eyebrow">Operational Command</p>
          <h1>Fire Incident System</h1>
        </div>
      </div>

      {subtitle ? <p className="header-subtitle">{subtitle}</p> : null}
    </header>
  );
}
