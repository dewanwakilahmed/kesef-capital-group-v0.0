import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Loans & Funding Solutions | Kesef Capital Group",
  description:
    "Discover tailored Merchant Cash Advances and SBA Loans with Kesef Capital Group. Empower your small business with fast, reliable funding solutions designed to help you grow.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
