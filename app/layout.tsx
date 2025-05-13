import type { Metadata } from 'next';
import { Raleway, Outfit } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

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
      <body className="font-outfit">
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
