"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext=createContext(null);
export function useTheme(){return useContext(ThemeContext);}
export default function ThemeProvider({children}){
 const [theme,setTheme]=useState("dark");
 useEffect(()=>{const saved=localStorage.getItem("takaghub-theme"); const t=saved||"dark"; setTheme(t); document.documentElement.dataset.theme=t;},[]);
 function toggle(){const t=theme==="dark"?"light":"dark"; setTheme(t); document.documentElement.dataset.theme=t; localStorage.setItem("takaghub-theme",t);}
 return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>;
}