import React from 'react'
import SearchForm from '@/components/ui/SearchForm';
import { fetchTMDB, reduceDecimal } from '@/lib/utils';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Pagination from '@/components/ui/Pagination';

export type Movie= {
    id: number,
    title: string,
    overview: string,
    vote_average: number,
    poster_path: string,
}
async function page({ searchParams }: { searchParams?: Promise<{ query?: string, type?: string, page?: number }> }) {
    const query = (await searchParams)?.query || '';
    const type = (await searchParams)?.type || 'movie';
    const page = Number((await searchParams)?.page) || 1;
    const data = await fetchTMDB(`/search/${type}`, {query, page});
    const {results, total_pages, total_results} = data
    // console.log(data);

  return (
    <div className='min-h-screen bg-gray-900'>
    <div>
        <SearchForm query=''/>
    </div>
        <div className="px-24 bg-gray-900 p-16">
            {results.length?  
            (<div>
                <span className='capitalize text-white text-2xl text-center font-bold my-4 block'>{results.length} out of {total_results} search results found on this page</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {results.map((movie : Movie) => (
                        <Link href={`/movie-details/${movie.id}`} key={movie.id}>
                    <Card
                        data={{
                            title: movie.title,
                            description: movie.overview,
                            rating: reduceDecimal(movie.vote_average),
                            imageUrl: movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`: '/images/no-image.jpg',
                        }}
                        />
                    </Link> 
                    ))}
                </div>
            </div> ) : <span className='font-bold text-white text-3xl text-center block'>No Results Found!</span>} 
          <Pagination page = {page} totalPages = {total_pages} type={type} query = {query}/>
        </div>
    </div>
  )
}

export default page
