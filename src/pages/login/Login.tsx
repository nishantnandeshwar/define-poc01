import React, { useRef, useState, useEffect, FormEvent } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './Login.css';


interface OutletContext {
  token: string | null;
  onLogin?: (token: string) => void;
}

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  
  const { token, onLogin } = useOutletContext<OutletContext>();

  const [user, setUser] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

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

  const handleSubmit = (e: FormEvent) => {
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
            Need an account? <a href="/register" className="link">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
