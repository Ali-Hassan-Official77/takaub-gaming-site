"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
export default function ThemeToggle(){
 const {theme,toggle}=useTheme()||{theme:"dark",toggle:()=>{}};
 return <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme==="dark"?"light":"dark"} mode`} title={`Switch to ${theme==="dark"?"light":"dark"} mode`}>
  {theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}
 </button>;
}