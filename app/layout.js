import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/quicksand";
import Footer from '@components/Footer';

const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "Craftsmith",
  description: "Elevate your expertise with Craftsmith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
