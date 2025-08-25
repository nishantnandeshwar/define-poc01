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
  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  const [currentDateTime, setCurrentDateTime] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

   useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format: M/D/YYYY h:mm am/pm
      const options: Intl.DateTimeFormatOptions = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };

      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute
    return () => clearInterval(interval);
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
        showToast('success', 'Login successful!')
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

  const handlePasswordVisibility = () => {
    setPasswordShow(prev => !prev)
  }

  return (
    <div className={styles.authWrap}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.logoContainer}>
            <img
              src={require('../../assets/images/member_first_logo.png')}
              alt="logo"
              className={styles.logoImg}
            />
            <div className={styles.verticalBar}></div>
            <span className={styles.mrmText}>MRM</span>
          </div>
        </div>
        <form className={styles.form} onSubmit={validateForm}>
          <div className={styles.inputContainer}>
            <img
              src={require('../../assets/images/user.png')}
              alt="user-logo"
              className={styles.inputImg}
            />
            <input
              type="text"
              id="user_name"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUserName(e.target.value)}
              value={useName}
              required
              className={styles.inputStyle}
              placeholder='username'
            />
          </div>

          <div className={styles.inputContainer}>
            <img
              src={require('../../assets/images/key.png')}
              alt="key-password"
              className={styles.inputImg}
            />
            <input
              type={passwordShow ? "text" : 'password'}
              id="pass_word"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.inputStyle}
              placeholder='password'
            />
            <img
              src={passwordShow ? require('../../assets/images/show.png') : require('../../assets/images/hide.png')}
              alt="hide-show"
              className={styles.passwordHideShowImg}
              onClick={handlePasswordVisibility}
            />
          </div>

          <button className={styles.btn} type="submit">
            Log In
          </button>

          <p className={styles.hint}>
            Need help logging in?<a href="/register" className="link"> Click here to reset your password.</a>
          </p>
        </form>
      </div>
      <div className={styles.footer}>
        Copyright © 2025 MembersFirst {currentDateTime} - MRM 7.0
      </div>
      {
        loading &&
        <LoaderModal loading={loading} message="Loading . ." />
      }
    </div>
  );
}
