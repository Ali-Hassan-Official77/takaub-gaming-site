"use client";
import { Heart } from "lucide-react";
import { useEffect,useState } from "react";
import { useToast } from "./Toast";
export default function FavoriteButton({game}){
 const [saved,setSaved]=useState(false); const toast=useToast();
 useEffect(()=>{try{setSaved(JSON.parse(localStorage.getItem("takaghub-favorites")||"[]").some(x=>String(x.id)===String(game.id)))}catch{}},[game.id]);
 function toggle(e){e.preventDefault();e.stopPropagation();let list=[];try{list=JSON.parse(localStorage.getItem("takaghub-favorites")||"[]")}catch{}; if(saved){list=list.filter(x=>String(x.id)!==String(game.id));setSaved(false);toast?.push("Removed from your favorites","success")}else{list=[...list,{id:game.id,name:game.name,image:game.background_image||null}];setSaved(true);toast?.push(`${game.name} added to favorites`,"success")}localStorage.setItem("takaghub-favorites",JSON.stringify(list));}
 return <button className={`favorite-button ${saved?"saved":""}`} onClick={toggle} aria-label={saved?"Remove favorite":"Add favorite"} title={saved?"Remove favorite":"Add favorite"}><Heart size={16} fill={saved?"currentColor":"none"}/></button>;
}