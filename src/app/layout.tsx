import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Yunus Yerli - Portfolio",
  description: "Frontend Developer / Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-black font-inter">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
