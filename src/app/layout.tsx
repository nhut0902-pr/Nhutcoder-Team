import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nhutcoder Team',
  description: 'Building Digital Dreams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
