import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchTMDB(endpoint: string, params?: Record<string, string| number>) {

  const url = new URL(`${process.env.TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY!)

  if(params)
  {
    for(const [key, value] of Object.entries(params))
      url.searchParams.append(key, String(value));
  }
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from TMDB: ${url}`);
  }

  return res.json();
}


export function reduceDecimal(n : number):number
{
  return Number(n.toFixed(1));
}