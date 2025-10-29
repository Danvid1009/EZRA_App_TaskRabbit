import { Link } from 'react-router-dom';
import { jobs } from '../data';

export default function Provider() {
  const handleAccept = (job) => {
    alert(`Accepted job: ${job.description}! (This is just a demo)`);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <Link to="/" style={{ color: '#0ea5e9', textDecoration: 'none' }}>← Home</Link>
      
      <h1 style={{ marginTop: 24, marginBottom: 8 }}>Available Jobs</h1>
      <p style={{ color: '#666', marginBottom: 32 }}>Browse and accept jobs in your area</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {jobs.map(job => (
          <div
            key={job.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 20,
              background: 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 20, color: '#0ea5e9' }}>{job.category}</h3>
                <p style={{ margin: '8px 0', fontSize: 16 }}>{job.description}</p>
              </div>
              <span style={{
                background: '#fef3c7',
                color: '#92400e',
                padding: '4px 12px',
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 600,
              }}>
                New
              </span>
            </div>

            <div style={{ marginBottom: 16, color: '#555', fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div>📍 {job.location}</div>
              <div>💰 Budget: {job.budget}</div>
              <div>🕐 {job.time}</div>
            </div>

            <button
              onClick={() => handleAccept(job)}
              style={{
                padding: '10px 20px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                fontSize: 16,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Accept Job
            </button>
          </div>
        ))}
      </div>

      {jobs.length === 0 && (
        <div style={{ textAlign: 'center', padding: 60, color: '#999' }}>
          <p>No jobs available at the moment.</p>
        </div>
      )}
    </div>
  );
}

