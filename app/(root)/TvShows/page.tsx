import React from "react";
import Card from "@/components/ui/Card";
import { fetchTMDB, reduceDecimal } from "@/lib/utils";
import Link from "next/link";
export type TvShow = {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
}
async function Page() {
    const data2 = await fetchTMDB("/tv/popular");
    const results: TvShow[] = data2.results;
    // console.log(results);

  return (
    <main className="bg-gray-950 min-h-screen text-white">

      {/* Popular Tv Shows Section */}
      <section className="w-full py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
            Popular TV Shows
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {results.map((tv) => (
                 <Link href={`/TvShows/TvDetails/${tv.id}`} key={tv.id}>
                <Card
                    data={{
                    title: tv.title,
                    description: tv.overview? tv.overview: 'Joe el gamed fel ICPC me2ata3 el donya we mafeesh seeny 3aref yesed m3ah',
                    rating: reduceDecimal(tv.vote_average),
                    imageUrl: tv.poster_path?`https://image.tmdb.org/t/p/w500${tv.poster_path}`: '/images/test.jpg',
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
