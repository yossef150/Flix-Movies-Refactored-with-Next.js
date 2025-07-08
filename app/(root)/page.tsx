import React from "react";
import Card from "@/components/ui/Card";
import { fetchTMDB, reduceDecimal } from "@/lib/utils";
import Link from "next/link";
import SearchForm from "@/components/ui/SearchForm";
import SwiperComponent from "@/components/ui/SwiperComponent";
import { Movie } from "@/types";
async function Page({searchParams}: {searchParams: Promise<{query: string}>}) {
    const query = (await searchParams)?.query|| '';
    const data = await fetchTMDB("/movie/now_playing")
    const data2 = await fetchTMDB("/movie/popular");
    const results: Movie[] = data2.results;
    const movies: Movie[] = data.results;
    // console.log(results);
  
  return (
    <main className="bg-gray-950 min-h-screen text-white bg-[url('/images/showcase-bg.jpg')]">
      {/* Now Playing Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
            Now Playing {query}
          </h2>
          <div className="w-full">
            <SwiperComponent movies={movies}/>
          </div>
        </div>
      </section>
      <section title="Search-Section" className="search-section">
        <SearchForm query={query}/>
      </section>
      {/* Popular Movies Section */}
      <section className="w-full pt-16 pb-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
            Popular Movies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {results.map((movie) => (
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
        </div>
      </section>
    </main>
  );
}

export default Page;
