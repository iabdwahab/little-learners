import type { Metadata } from "next";
import "./globals.css";
import { outfit } from "./ui/fonts";
import Announcement from "./components/Announcement";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";

export const metadata: Metadata = {
  title: "Little Learners - Home",
  description: "Little Learners is a platform for children to learn and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-orange-97 text-grey-10 pt-5 antialiased`}>
        <div className="mx-auto max-w-7xl px-2">
          <Announcement />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
