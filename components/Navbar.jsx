"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Compass, Menu, Search, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
const links=[{href:"/",label:"Home"},{href:"/games",label:"Discover"}];
export default function Navbar(){
 const [open,setOpen]=useState(false); const pathname=usePathname();
 return <header className="site-header"><nav className="nav-shell"><BrandLogo/>
  <div className="desktop-nav">{links.map(l=><Link key={l.href} href={l.href} className={`nav-link ${pathname===l.href||(l.href!=="/"&&pathname.startsWith(l.href))?"active":""}`}>{l.label}</Link>)}</div>
  <div className="nav-actions"><Link href="/games" className="icon-button" aria-label="Search"><Search size={17}/></Link><ThemeToggle/><Link href="/games" className="nav-cta"><Compass size={16}/> Explore</Link><button className="mobile-menu-button" onClick={()=>setOpen(v=>!v)} aria-label="Menu">{open?<X size={21}/>:<Menu size={21}/>}</button></div>
 </nav>{open&&<div className="mobile-menu">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link href="/games" onClick={()=>setOpen(false)} className="mobile-menu-cta"><Compass size={16}/> Explore games</Link></div>}</header>;
}