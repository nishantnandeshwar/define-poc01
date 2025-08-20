import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./LoaderModal.css";

interface LoaderModalProps {
  loading: boolean;
  message?: string;
}

const LoaderModal: React.FC<LoaderModalProps> = ({ loading, message }) => {
  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <ClipLoader color="#2563eb" size={50} />
        {message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default LoaderModal;
