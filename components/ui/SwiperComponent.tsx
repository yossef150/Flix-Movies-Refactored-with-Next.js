"use client"

import { Movie } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { reduceDecimal } from '@/lib/utils';
import Link from 'next/link';

type Props = {
    movies: Movie[]
}
function SwiperComponent({ movies }: Props) {
  return (
    <div className="w-full">
        <Swiper  modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          568: { slidesPerView: 2, spaceBetween: 20 },
          780: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 25 },
        }}>
          {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className='relative md:h-[400px] w-[350px] h-[500px] md:w-full mx-auto'>
            <Link href={`/movie-details/${movie.id}`} className="block">
              <Image
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg w-full h-full object-cover brightness-80"
                fill
              />
              <h4 className="mt-2 text-white text-sm font-semibold flex items-center gap-1">
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 flex items-center justify-center gap-1">
                  <p className="text-yellow-400 text-lg">⭐</p>
                  <p className="text-white font-semibold text-sm">{reduceDecimal(movie.vote_average)}/10</p>
              </div>
              </h4>
            </Link>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default SwiperComponent
