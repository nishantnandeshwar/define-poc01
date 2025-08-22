import React, { useRef, useState, useEffect, FormEvent } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './Login.module.css';
import { loginUserService } from '../../services/login.service';


interface OutletContext {
  token: string | null;
  onLogin?: (token: string) => void;
}

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();


  const { token, onLogin } = useOutletContext<OutletContext>();
  const [errMsg, setErrMsg] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false)
  const [useName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  useEffect(() => {
    userRef.current?.focus();
  }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd]);

  // useEffect(() => {
  //   if (token) {
  //     navigate('/dashboard', { replace: true });
  //   }
  // }, [token, navigate]);

  const validateForm = (e: FormEvent) => {
    e.preventDefault();

    if (!useName.trim() || !password.trim()) {
      setErrMsg('Please fill in both fields.');
      return;
    }
    loginUser()
    // // Dummy auth: accept any non-empty credentials
    // const fakeToken = 'sample_token';
    // onLogin?.(fakeToken);
    // navigate('/dashboard', { replace: true });
  };

  const loginUser = async () => {
    try {
      setLoading(true);
      const requestBody = {
        UserName: useName,
        Password: password
      }

      const data: any = await loginUserService(requestBody)
      console.log("loginUser data>>", JSON.stringify(data))
      navigate('/dashboard', { replace: true });
    } catch (e) {
      alert("Failed to fetch members.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authWrap}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Sign In</h2>
        </div>
        <form className={styles.form} onSubmit={validateForm}>
          {/* {errMsg && (
            <div className={styles.error} ref={errRef} aria-live="assertive">
              {errMsg}
            </div>
          )} */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
            value={useName}
            required
          />

          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button className={styles.btn} type="submit">
            Sign In
          </button>

          <p className={styles.hint}>
            Need an account? <a href="/register" className="link">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
