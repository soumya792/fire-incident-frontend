import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin?: (credentials: { user: string }) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!user.trim() || !pass.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setError(null);
    if (onLogin) {
      onLogin({ user });
    }
    navigate("/home");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">F</div>
        <div className="login-heading">
          <h1>Login</h1>
          <p>Access Fire Incident System operations and coordination tools.</p>
        </div>

        {error ? (
          <div
            style={{
              padding: "0.5rem 0.75rem",
              backgroundColor: "#7f1d1d",
              color: "#fca5a5",
              borderRadius: "4px",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {error}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username-input">Username</label>
            <div className="input-wrapper">
              <input
                id="username-input"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password-input">Password</label>
            <div className="input-wrapper">
              <input
                id="password-input"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="login-footer">Need help? Contact support@fireops.com</p>
      </section>
    </main>
  );
};

export default Login;
