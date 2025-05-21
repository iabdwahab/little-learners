import type { Metadata } from 'next';
import './globals.css';
import { outfit } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Little Learners - Home',
  description: 'Little Learners is a platform for children to learn and grow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
