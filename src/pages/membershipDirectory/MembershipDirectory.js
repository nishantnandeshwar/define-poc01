import React, { useEffect, useState } from 'react';

export default function MembershipDirectory() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch members.');
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: '#e2e8f0', padding: 16 }}>
      <h1 style={{ color: '#60a5fa', marginBottom: 24 }}>Membership Directory</h1>
      {loading && <p>Loading members...</p>}
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <div style={{ width: '100%', maxWidth: 600, display: 'grid', gap: 12 }}>
        {members.map(member => (
          <div key={member.id} style={{ background: '#1e293b', padding: 16, borderRadius: 8, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
            <h3 style={{ margin: 0, color: '#60a5fa' }}>{member.name}</h3>
            <p style={{ margin: 4, color: '#cbd5e1' }}>{member.email}</p>
            <p style={{ margin: 0, color: '#94a3b8' }}>{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
