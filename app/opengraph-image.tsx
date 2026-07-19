import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Akshat Singh | Premium Python & Data Science Tutor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 280, fontWeight: 900, letterSpacing: '-0.05em', color: 'white', marginBottom: '20px' }}>
          AS
        </div>
        <div style={{ fontSize: 48, color: '#a0a0a0', fontWeight: 500, letterSpacing: '-0.02em' }}>
          Premium Python &amp; Data Science Tutor
        </div>
      </div>
    ),
    { ...size }
  );
}
