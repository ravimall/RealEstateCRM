import React from 'react';

const Dashboard: React.FC = () => {
  // TODO: Fetch project summaries, bookings, payments, etc.
  return (
    <main style={{ padding: '2rem', background: 'hsl(0, 0%, 100%)' }}>
      <h1 style={{ fontFamily: 'Space Grotesk', color: 'hsl(96, 85.19%, 73.53%)' }}>
        Real Estate CRM Dashboard
      </h1>
      <section style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
      }}>
        {/* Example widgets */}
        <div style={{
          background: 'hsl(0, 0%, 96.47%)',
          borderRadius: '0rem',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h2 style={{ fontFamily: 'Space Grotesk', color: 'hsl(254.21, 100%, 92.55%)' }}>Projects</h2>
          <p style={{ fontFamily: 'Geist' }}>Total projects: {/* TODO: dynamic */} 0</p>
        </div>
        <div style={{
          background: 'hsl(0, 0%, 96.47%)',
          borderRadius: '0rem',
          padding: '2rem'
        }}>
          <h2 style={{ fontFamily: 'Space Grotesk', color: 'hsl(96, 85.19%, 73.53%)' }}>Bookings</h2>
          <p style={{ fontFamily: 'Geist' }}>Total bookings: {/* TODO: dynamic */} 0</p>
        </div>
        {/* Add more widgets for payments, reports, etc. */}
      </section>
    </main>
  );
};

export default Dashboard;
