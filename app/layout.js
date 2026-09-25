import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ToastProvider from "@/components/Toast";

const display = Space_Grotesk({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-display", display:"swap" });
const sans = Manrope({ subsets:["latin"], weight:["400","500","600","700","800"], variable:"--font-sans", display:"swap" });

export const metadata = {
  title: "TAKAGHUB — Discover your next game",
  description: "TAKAGHUB is a premium visual game discovery platform powered by RAWG.",
  icons: { icon:"/favicon.svg", shortcut:"/favicon.svg", apple:"/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable}`}>
    <body><ThemeProvider><ToastProvider><div className="site-shell"><Navbar/><main>{children}</main><Footer/></div></ToastProvider></ThemeProvider></body>
  </html>;
}