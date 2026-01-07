import React from 'react';

function IndiaPortal() {
  const html = `
    <h2>Hello from HTML!</h2>
    <p>This is rendered directly from an HTML string.</p>
  `;

  return (
    <div
      style={{ padding: 20 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default IndiaPortal;