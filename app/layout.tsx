import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Little Learners',
  description: 'A platform for children to learn and grow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
