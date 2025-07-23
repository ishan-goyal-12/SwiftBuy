'use client';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";

export default function Layout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
