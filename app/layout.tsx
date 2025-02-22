import type { Metadata } from "next";
import {  Raleway } from "next/font/google";
import "./globals.css";
import Nav from "./_components/shared/Nav";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Builder | Build your resume",
  description: "Build your resume easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-background`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
