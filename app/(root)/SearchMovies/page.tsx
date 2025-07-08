import React from 'react'
import SearchForm from '@/components/ui/SearchForm';
import { fetchTMDB, reduceDecimal } from '@/lib/utils';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export type Movie= {
    id: number,
    title: string,
    overview: string,
    vote_average: number,
    poster_path: string,
}
async function page({ searchParams }: { searchParams?: Promise<{ query?: string, type?: string }> }) {
    const query = (await searchParams)?.query || '';
    const type = (await searchParams)?.type || 'movie';
    const data = await fetchTMDB(`/search/${type}`, {query});
    const {results} = data
    // console.log(results);

  return (
    <div className='min-h-screen bg-gray-900'>
    <div>
        <SearchForm query=''/>
    </div>
        <div className="px-24 bg-gray-900 p-16">
            {results.length?  
            (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {results.map((movie : Movie) => (
                    <Link href={`/movie-details/${movie.id}`} key={movie.id}>
                <Card
                    data={{
                        title: movie.title,
                    description: movie.overview,
                    rating: reduceDecimal(movie.vote_average),
                    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                  />
                </Link> 
                ))}
            </div> ) : <span className='font-bold text-white text-3xl text-center block'>No Results Found!</span>} 
        </div>
    </div>
  )
}

export default page
