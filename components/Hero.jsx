"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Sparkles, Star } from "lucide-react";
import { useEffect,useState } from "react";
import SearchBar from "@/components/SearchBar";
import SafeImage from "@/components/SafeImage";
export default function Hero({games=[],stats=[]}){
 const [index,setIndex]=useState(0); const game=games[index]||games[0];
 useEffect(()=>{if(games.length<2)return; const id=setInterval(()=>setIndex(i=>(i+1)%games.length),5000);return()=>clearInterval(id)},[games.length]);
 if(!game)return <section className="hero-shell hero-empty"><div className="hero-inner"><div><span className="hero-kicker"><Sparkles size={13}/> TAKAGHUB</span><h1>Discover your next <span>great game.</span></h1><p>Connect your RAWG API key in <code>.env.local</code> to power the live catalog.</p><SearchBar large/></div></div></section>;
 return <section className="hero-shell"><div className="hero-backdrop"><AnimatePresence mode="sync"><motion.div key={game.id} initial={{opacity:0,scale:1.05}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{duration:1}}><SafeImage src={game.background_image} alt="" fill priority sizes="100vw" className="object-cover"/></motion.div></AnimatePresence></div><div className="hero-vignette"/>
 <div className="hero-inner"><motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
  <div className="hero-kicker"><Sparkles size={13}/> LIVE GAME DISCOVERY</div>
  <h1>Find your next <span>Game.</span></h1>
  <p>Explore real game data, ratings, platforms, releases and screenshots — all in one premium discovery hub.</p>
  <div className="hero-search-wrap"><SearchBar large/></div>
  <div className="hero-actions"><Link href={`/games/${game.id}`} className="primary-button">View featured game <ArrowUpRight size={17}/></Link><span className="hero-note"><Play size={13} fill="currentColor"/> Rotating live picks</span></div>
 </motion.div>
 <div className="hero-feature"><AnimatePresence mode="wait"><motion.div key={game.id} className="feature-frame" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.55}}>
   <div className="feature-image"><SafeImage src={game.background_image} alt={game.name} fill sizes="(max-width:900px) 92vw,50vw" className="object-cover"/></div><div className="feature-overlay"/>
   <div className="feature-label">TRENDING NOW</div><div className="feature-rating"><Star size={13} fill="currentColor"/> {game.rating?Number(game.rating).toFixed(1):"—"}</div>
   <div className="feature-content"><div className="feature-meta">{game.genres?.slice(0,2).map(g=>g.name).join(" · ")||"Game discovery"} {game.released&&` · ${new Date(game.released).getFullYear()}`}</div><h2>{game.name}</h2><Link href={`/games/${game.id}`} className="feature-link">Open game profile <ArrowUpRight size={17}/></Link></div>
   <div className="hero-controls"><button onClick={()=>setIndex(i=>(i-1+games.length)%games.length)} aria-label="Previous"><ChevronLeft size={17}/></button><div className="hero-dots">{games.slice(0,6).map((g,i)=><button key={g.id} onClick={()=>setIndex(i)} className={i===index?"active":""} aria-label={`Show ${g.name}`}/>)}</div><button onClick={()=>setIndex(i=>(i+1)%games.length)} aria-label="Next"><ChevronRight size={17}/></button></div>
 </motion.div></AnimatePresence></div></div>
 <div className="hero-stats">{stats.map((s,i)=><div className="hero-stat" key={s.label}><span className="stat-index">0{i+1}</span><div><strong>{s.value}</strong><small>{s.label}</small></div></div>)}</div>
 </section>;
}