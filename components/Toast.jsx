"use client";
import { createContext,useCallback,useContext,useState } from "react";
import { CheckCircle2, X } from "lucide-react";
const C=createContext(null);
export function useToast(){return useContext(C);}
export default function ToastProvider({children}){
 const [items,setItems]=useState([]);
 const push=useCallback((message,type="success")=>{const id=Date.now()+Math.random();setItems(v=>[...v,{id,message,type}]);setTimeout(()=>setItems(v=>v.filter(x=>x.id!==id)),3200)},[]);
 return <C.Provider value={{push}}>{children}<div className="toast-stack" aria-live="polite">{items.map(x=><div className={`toast ${x.type}`} key={x.id}><CheckCircle2 size={17}/><span>{x.message}</span><button onClick={()=>setItems(v=>v.filter(i=>i.id!==x.id))}><X size={14}/></button></div>)}</div></C.Provider>;
}