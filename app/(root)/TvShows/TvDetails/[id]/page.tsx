import React from 'react'
import { fetchTMDB, reduceDecimal } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface pageProps {
    params: Promise<{id : string}>
}
type genre = {
    id: number,
    name: string,
}
async function page({params}: pageProps) {
    const {id} = await params;
    // console.log(id)
    const data =  await fetchTMDB(`/tv/${id}`)
    // console.log(data.homepage);
  return (
    <>
        <div className='relative min-h-screen'>
        <div
        className={'absolute inset-0 bg-cover bg-center'}
        style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${data.backdrop_path}')`,
        backgroundPosition: 'center top'
    }}
    ></div>
        <div className='absolute inset-0 bg-gray-950 opacity-90'></div>
        <div className="z-10 relative p-6">
        <Link href="/TvShows">
            <div className="text-white text-lg mx-6 py-2 px-4 border-2 border-amber-500 hover:bg-amber-500 hover:text-black rounded-l bg-opacity-60 inline-block transition duration-300 hover:opacity-90">
                Back To TV Shows
            </div>
        </Link>
            <div className="flex flex-col md:flex-row justify-between gap-12 items-center my-12 mx-6">
                <Image src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} width={600} height={950} alt='poster photo'/>
                <div className='text-white flex flex-col gap-4 justify-center'>
                    <h2 className='text-center text-3xl'>{data.name}</h2>
                    <div className="flex items-center">
                        <p className="text-yellow-400 text-2xl">⭐</p>
                        <p className="text-white font-semibold text-xl pt-1">{reduceDecimal(data.vote_average)}/10</p>
                    </div>
                    <p className='text-lg'>Last Air Date: {data.last_air_date}</p>
                    <p className='text-lg'>{data.overview}</p>
                    <div>
                        <p className='text-xl font-bold'>Genres</p>
                        {data.genres.map((movie: genre)=><p key={movie.id} className='text-lg'>{movie.name}</p>)}  </div>             
                    <a href={`${data.homepage}`} target='_blank' rel='noopener noreferrer' className='text-white text-lg py-2 px-4 border-2 border-amber-500 hover:bg-amber-500 hover:text-black rounded-l bg-opacity-60 inline-block w-max transition duration-300 hover:opacity-90'>
                            Visit TV Homepage
                    </a>     
                </div>
            </div>
        </div>
        </div>
        <div className='text-white bg-gray-950 z-10 px-6'>
            <h3 className='text-center text-3xl font-bold p-6'>Movie Info</h3>
            <p className='text-lg px-6 py-3 border-b-1 border-gray-800'><span className='text-amber-300'>Number Of Episodes: </span>{data.number_of_episodes}</p>
            <p className='text-lg px-6 py-3 border-b-1 border-gray-800'><span className='text-amber-300'>Last Episode To Air: </span>Episode {data.last_episode_to_air.episode_number}</p>
            <p className='text-lg px-6 py-3 border-b-1 border-gray-800'><span className='text-amber-300'>Status: </span>{data.status}</p>
            <h4 className='text-xl font-bold px-6 py-4'>Production Companies</h4>
            <span className='px-6 pb-6 block'>
                {data.production_companies.map((company: genre)=> company.name).join(', ')}
            </span>
        </div>
    </>
  )
}

export default page
