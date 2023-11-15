import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "@/libs/context/ToasterContext";
import AuthContext from "@/libs/context/AuthContext";
import ActiveStatus from "./_components/active-status";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tok",
  description: "Messenger Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
