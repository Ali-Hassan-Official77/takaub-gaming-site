import { NextResponse } from "next/server"; import { rawgFetch } from "@/lib/rawg";
export const runtime = 'edge';
export async function GET(_request,{params}){try{return NextResponse.json(await rawgFetch(`/games/${params.id}/screenshots`));}catch(err){return NextResponse.json({error:err.message},{status:500});}}