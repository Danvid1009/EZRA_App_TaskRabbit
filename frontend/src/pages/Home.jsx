import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 40, textAlign: 'center' }}>
      <h1 style={{ fontSize: 48, marginBottom: 12, color: '#0ea5e9' }}>EZRA</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 40 }}>
        Israel's Bilingual Home-Services Marketplace
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Link 
          to="/customer"
          style={{
            padding: '16px 32px',
            background: '#0ea5e9',
            color: 'white',
            borderRadius: 8,
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Post a Job
        </Link>
        
        <Link 
          to="/provider"
          style={{
            padding: '16px 32px',
            background: '#f0f0f0',
            color: '#333',
            borderRadius: 8,
            textDecoration: 'none',
            fontSize: 18,
            fontWeight: 600,
            border: '2px solid #ddd',
          }}
        >
          I'm a Provider
        </Link>
      </div>
    </div>
  );
}

