import Link from "next/link";
import { ArrowUpRight, Layers3, MonitorPlay, Trophy, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import SectionHeading from "@/components/SectionHeading";
import { rawgFetch } from "@/lib/rawg";
export const revalidate=3600;
async function getHomeData(){
 const [trending,topRated,genres]=await Promise.all([
  rawgFetch("/games",{ordering:"-added",page_size:6}),
  rawgFetch("/games",{ordering:"-rating",page_size:8}),
  rawgFetch("/genres",{page_size:10})
 ]);
 return {trending:trending.results||[],topRated:topRated.results||[],genres:genres.results||[],count:trending.count||0};
}
export default async function HomePage(){
 const {trending,topRated,genres,count}=await getHomeData();
 return <>
 <Hero games={trending} stats={[{value:count?`${Math.round(count/1000)}K+`:"Live",label:"Games in catalog"},{value:"Live",label:"RAWG data source"},{value:"24/7",label:"Discovery ready"}]}/>
 <section className="intro-strip"><div className="content-shell intro-grid"><div className="intro-label"><span/> WHY TAKAGHUB</div><p>Built for <strong>visual discovery</strong>. Search real titles, scan ratings and platforms, inspect screenshots, save favorites and jump into the games worth your time.</p></div></section>
 <section className="content-shell section-space"><SectionHeading eyebrow="01 / LIVE SIGNAL" title="Games on the radar" subtitle="A rotating selection from the live RAWG catalog, refreshed through server-side caching." action={<Link href="/games" className="section-action">See all <ArrowUpRight size={16}/></Link>}/><GameGrid games={trending}/></section>
 <section className="genre-section"><div className="content-shell section-space"><SectionHeading eyebrow="02 / FIND YOUR MOOD" title="Browse by genre" subtitle="Go from a feeling to a world in one click."/><div className="genre-grid">{genres.slice(0,8).map((g,i)=><Link key={g.id} href={`/games?genres=${g.slug}`} className="genre-tile"><span>{String(i+1).padStart(2,"0")}</span><strong>{g.name}</strong><ArrowUpRight size={18}/></Link>)}</div></div></section>
 <section className="content-shell section-space"><div className="signal-panel"><div className="signal-copy"><span className="section-eyebrow">03 / THE HUB</span><h2>Everything you need before you press play.</h2><p>Ratings, release dates, platforms, developers, publishers and screenshots stay close to the game — no invented metadata, no filler.</p><Link href="/games" className="primary-button">Explore the library <ArrowUpRight size={17}/></Link></div><div className="signal-stats"><div><Trophy size={20}/><strong>Ratings</strong><span>See community rating data.</span></div><div><MonitorPlay size={20}/><strong>Platforms</strong><span>Know where you can play.</span></div><div><Layers3 size={20}/><strong>Visuals</strong><span>Browse real screenshots.</span></div><div><Zap size={20}/><strong>Fast</strong><span>Cached server-side for speed.</span></div></div></div></section>
 <section className="top-rated-section"><div className="content-shell section-space"><SectionHeading eyebrow="04 / COMMUNITY SIGNAL" title="Highest rated" subtitle="Titles surfaced by RAWG community rating data." action={<Link href="/games?ordering=-rating" className="section-action">View ratings <ArrowUpRight size={16}/></Link>}/><GameGrid games={topRated}/></div></section>
 </>;
}