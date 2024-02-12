import React from 'react';

const TechnicalIssueMessage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>IFKT</h1>
      <h2 style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>We are facing technical issues and the website will be back up soon.</h2>
    </div>
  );
};

export default TechnicalIssueMessage;
