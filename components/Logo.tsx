import React from 'react';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: 'auto', height: '100%' }}>
      <rect width="512" height="512" fill="#000000" rx="120" stroke="#333" strokeWidth="8"/>
      <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="280" fontWeight="900" fill="#ffffff" letterSpacing="-10">AS</text>
    </svg>
  );
}
