import Link from "next/link";
import { ArrowUpRight, CalendarDays, Image as ImageIcon } from "lucide-react";
import RatingBadge from "@/components/RatingBadge";
import SafeImage from "@/components/SafeImage";
import FavoriteButton from "@/components/FavoriteButton";
export default function GameCard({game,priority=false}){
 const genres=(game.genres||[]).slice(0,2);
 return <Link href={`/games/${game.id}`} className="game-card"><div className="game-card-image">
  {game.background_image?<SafeImage src={game.background_image} alt={game.name} fill priority={priority} sizes="(max-width:700px) 92vw,(max-width:1100px) 45vw,23vw" className="object-cover"/>:<div className="image-fallback"><ImageIcon size={20}/> No artwork</div>}
  <div className="game-card-shade"/><div className="game-rating"><RatingBadge rating={game.rating}/></div><FavoriteButton game={game}/><span className="card-arrow"><ArrowUpRight size={17}/></span>
 </div><div className="game-card-body"><div className="game-card-title-row"><h3>{game.name}</h3>{game.released&&<span>{new Date(game.released).getFullYear()}</span>}</div>{genres.length>0&&<div className="game-tags">{genres.map(g=><span key={g.id}>{g.name}</span>)}</div>}<div className="game-card-footer"><span><CalendarDays size={13}/> {game.released?new Date(game.released).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}):"Release TBA"}</span><span>View profile</span></div></div></Link>;
}