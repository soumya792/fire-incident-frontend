import { NavLink } from "react-router-dom";
import { Gauge, Box, ClipboardList, Clock3, MessageCircle } from "lucide-react";

const mobileLinks = [
  { to: "/home", label: "Dashboard", icon: Gauge },
  { to: "/assets", label: "Assets", icon: Box },
  { to: "/work-orders", label: "Orders", icon: ClipboardList },
  { to: "/timer", label: "Timer", icon: Clock3 },
  { to: "/chat", label: "Chat", icon: MessageCircle },
];

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      {mobileLinks.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}>
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
