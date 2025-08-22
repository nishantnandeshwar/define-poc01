import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import style from './LoaderModal.module.css'

interface LoaderModalProps {
  loading: boolean;
  message?: string;
}

const LoaderModal: React.FC<LoaderModalProps> = ({ loading, message }) => {
  if (!loading) return null;

  return (
    <div className={style.loader_overlay}>
      <div className={style.loader_container}>
        <ClipLoader color="#ffffffff" size={30} />
        {message && <p className={style.loader_message}>{message}</p>}
      </div>
    </div>
  );
};

export default LoaderModal;
