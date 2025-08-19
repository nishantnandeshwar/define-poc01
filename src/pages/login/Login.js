import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Login() {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const navigate = useNavigate();
  const { token, onLogin } = useOutletContext();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  useEffect(() => {
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.trim() || !pwd.trim()) {
      setErrMsg('Please fill in both fields.');
      return;
    }

    // Dummy auth: accept any non-empty credentials
    const fakeToken = 'sample_token';
    onLogin?.(fakeToken);
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }
        .auth-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 16px;
        }
        .card {
          background: #1e293b;
          border-radius: 12px;
          padding: 32px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }
        .card-header h2 {
          margin: 0 0 8px;
          color: #60a5fa;
        }
        .card-header p {
          margin: 0 0 20px;
          color: #cbd5e1;
          font-size: 14px;
        }
        .form label {
          display: block;
          color: #e2e8f0;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .form input {
          width: 100%;
          padding: 10px 12px;
          margin-top: 6px;
          border: 1px solid #334155;
          border-radius: 6px;
          background: #0f172a;
          color: white;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form input:focus {
          border-color: #60a5fa;
        }
        .btn {
          display: inline-block;
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 16px;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: linear-gradient(135deg, #1d4ed8, #6d28d9);
        }
        .hint {
          color: #94a3b8;
          font-size: 13px;
          margin-top: 14px;
          text-align: center;
        }
        .error {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
          padding: 8px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 12px;
          text-align: center;
        }
      `}</style>

      <div className="auth-wrap">
        <div className="card">
          <div className="card-header">
            <h2>Sign In</h2>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {errMsg && (
              <div className="error" ref={errRef} aria-live="assertive">
                {errMsg}
              </div>
            )}

            <label htmlFor="username">
              Username
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </label>

            <button className="btn" type="submit">
              Sign In
            </button>

            <p className="hint">
              Need an account? <a href="/register" style={{ color: '#60a5fa' }}>Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
