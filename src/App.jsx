import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import AssetDetails from "./pages/AssetDetails";
import WorkOrders from "./pages/WorkOrders";
import WorkOrderDetails from "./pages/WorkOrderDetails";
import Timer from "./pages/Timer";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import "./App.css";

function AppShell() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-view">
        <Header subtitle="Field service management for inspections, repairs, and response coordination" />

        <main className="page-frame">
          <Outlet />
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="assets" element={<Assets />} />
        <Route path="assets/:id" element={<AssetDetails />} />
        <Route path="work-orders" element={<WorkOrders />} />
        <Route path="work-orders/:id" element={<WorkOrderDetails />} />
        <Route path="timer" element={<Timer />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
