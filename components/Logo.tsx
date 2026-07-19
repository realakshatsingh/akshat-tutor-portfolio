import React from 'react';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: 'auto', height: '100%' }}>
      <rect width="512" height="512" fill="#000000" rx="120" stroke="#333" strokeWidth="8"/>
      <text x="140" y="340" fontFamily="system-ui, -apple-system, sans-serif" fontSize="260" fontWeight="900" fill="#ffffff" letterSpacing="-15">AS</text>
      <circle cx="410" cy="330" r="32" fill="#4ade80" />
    </svg>
  );
}
