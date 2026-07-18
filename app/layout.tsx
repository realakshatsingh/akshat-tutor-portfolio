import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshat S. | Python & Data Science Tutor',
  description: 'Python Tutor from IIT Delhi | For Kids, Job Seekers, Working Professionals | Data Analysis, AI ML, Python',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
