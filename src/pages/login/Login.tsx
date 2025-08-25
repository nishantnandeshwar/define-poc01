import React, { useRef, useState, useEffect, FormEvent } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styles from './Login.module.css';
import { ConstantsUrl } from '../../utils/apiUrl';
import { useAppDispatch } from '../../utils';
import { loginUserService, logout } from '../../redux/actions/auth.action';
import { USER_AUTH_ACTION_TYPES } from '../../redux/types/auth.type';
import LoaderModal from '../../components/loader/LoaderModal';
import { showToast } from '../../components/toaster/toastHelper';


interface OutletContext {
  isLogIn: boolean;
  onLogin?: (value: boolean) => void;
}

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const { isLogIn, onLogin } = useOutletContext<OutletContext>();

  const [errMsg, setErrMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)
  const [useName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useAppDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

   useEffect(() => {
    if (isLogIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLogIn, navigate]);

  const validateForm = (e: FormEvent) => {
    e.preventDefault();
    if (!useName.trim() || !password.trim()) {
      setErrMsg('Please fill in both fields.');
      return;
    }
    loginUser()
  };

  const loginUser = async () => {
    try {
      setLoading(true);
      const resp: any = await dispatch(
        loginUserService(ConstantsUrl.BASE_URL, ConstantsUrl.API_KEY_CONSTANT, useName, password)
      );
      // console.log("resp>>", JSON.stringify(resp))

      if (resp.type === USER_AUTH_ACTION_TYPES.LOGIN_SUCCESS) {
        console.log("login success")
        showToast('success', 'Operation successful!')
        onLogin?.(true);
        navigate('/dashboard', { replace: true });
      } else if (resp.type === USER_AUTH_ACTION_TYPES.LOGIN_FAILURE) {
        showToast('error', resp?.payload?.error || "Something went wrong !!")
      }
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
       
        {/* <button onClick={() => showToast('success', 'Operation successful!')}>
          Show Toast
        </button> */}
      </div>
      {
        loading &&
        <LoaderModal loading={loading} message="Loading . ." />
      }
    </div>
  );
}
