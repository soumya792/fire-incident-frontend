import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // UI only for now
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <div className="logo-icon">
            <span>F</span>
          </div>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h1>Welcome Back</h1>
          <p>Sign in to manage your fire equipment</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit}>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>

              <Link to="/reset-password">
                Forgot Password?
              </Link>
            </div>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "◉" : "○"}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="remember-row">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
          </div>

          {/* Login */}
          <button type="submit" className="login-button">
            Sign In
            <span>→</span>
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>
            Don't have an account?
            <span> Contact Administrator</span>
          </p>
        </div>

      </div>

      <div className="login-bottom">
        <span>Fire Equipment Maintenance</span>
        <span>•</span>
        <span>Secure Access</span>
      </div>
    </div>
  );
}

export default Login;
