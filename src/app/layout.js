// app/layout.jsx  (ตรวจชื่อให้ถูก: "layout.jsx" ไม่ใช่ laout.js)
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import "./globals.css";
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Providers from "./providers"; // ห่อ SessionProvider และ NavBar ฝั่ง client

export const metadata = {
  title: "MyShop",
  description: "Email/Password Auth",
};

export default function RootLayout({ children }) {
  // ไฟล์นี้เป็น Server Component (ไม่มี "use client")
  // หลีกเลี่ยงการใช้ client hooks / context ที่นี่
  return (
    <html lang="th">
      <head>
        <meta name="theme-color" content="#0d6efd" />
      </head>
      <body>
        {/* ย้าย SessionProvider + NavBar ไปอยู่ใน Providers (client) */}
        <Providers> 
       
          {children}
          
          </Providers>
   <Footer/>
        {/* โหลด Bootstrap JS ทาง Script ได้ */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
