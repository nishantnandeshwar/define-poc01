// import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { onLogout, token } = useOutletContext();

  const handleLogout = () => {
    onLogout?.();
    navigate('/', { replace: true });
  };

  const handleMembership = () => {
    navigate('/membership-directory');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: '#e2e8f0',
      padding: 16
    }}>
      <div style={{
        background: '#1e293b',
        borderRadius: 12,
        padding: 32,
        width: '100%',
        maxWidth: 600,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#60a5fa', marginTop: 0 }}>Dashboard</h1>
        <p style={{ color: '#cbd5e1' }}>You are logged in{token ? ' ✅' : ''}.</p>

        {/* Membership Directory button */}
        <button
          onClick={handleMembership}
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            border: 'none',
            borderRadius: 6,
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            cursor: 'pointer',
            marginTop: 16,
            marginRight: 8
          }}
        >
          Membership Directory
        </button>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            border: 'none',
            borderRadius: 6,
            color: 'white',
            fontSize: 15,
            fontWeight: 500,
            cursor: 'pointer',
            marginTop: 16
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
