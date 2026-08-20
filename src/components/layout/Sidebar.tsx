import React from "react";
import { NavLink } from "react-router-dom";
import {
  Gauge,
  Box,
  ClipboardList,
  Clock3,
  MessageCircle,
  UserCircle,
  Settings2,
  LucideIcon,
} from "lucide-react";

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { to: "/home", label: "Dashboard", icon: Gauge },
  { to: "/assets", label: "Assets", icon: Box },
  { to: "/work-orders", label: "Work Orders", icon: ClipboardList },
  { to: "/timer", label: "Timer", icon: Clock3 },
  { to: "/chat", label: "Chat", icon: MessageCircle },
  { to: "/profile", label: "Profile", icon: UserCircle },
  { to: "/settings", label: "Settings", icon: Settings2 },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">F</div>
        <div>
          <p className="eyebrow">Fire Safety</p>
          <strong>Operations</strong>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            <Icon className="nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
