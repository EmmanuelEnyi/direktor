// app/layout.tsx
import "../styles/globals.css"; // Make sure globals.css exists in styles folder
import { ReactNode } from "react";
import Header from "../components/Header"; // Ensure this path points to components/Header.tsx

export const metadata = {
  title: "Direktor Tournament Manager",
  description: "Manage your Scrabble tournaments efficiently",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        <main>{children}</main>
        <footer className="text-center p-4 border-t border-gray-700">
          <small>© 2025 Direktor Tournament Manager. All rights reserved.</small>
        </footer>
      </body>
    </html>
  );
}
