import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "JobAaYo",
  description: "Find Your Future Job Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
