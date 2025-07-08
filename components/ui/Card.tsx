import React from "react";
import Image from "next/image";

type CardProps = {
  data: {
    title: string;
    description: string;
    rating: number;
    imageUrl: string;
  };
};

export default function Card({ data }: CardProps) {
  return (
    <div className=" w-[350px] md:w-[250px] mx-auto bg-blue-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-full aspect-[2/3]">
        <Image
            src={data.imageUrl || "/images/placeholder.jpg"}
            alt={data.description}
            fill
            className="object-cover brightness-80"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 flex items-center justify-center gap-1">
          <p className="text-yellow-400 text-lg">⭐</p>
          <p className="text-white font-semibold text-sm">{data.rating}/10</p>
        </div>
      </div>

      <div className="p-3">
        <h2 className="text-white text-lg font-bold truncate">{data.title}</h2>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{data.description}</p>
      </div>
    </div>
  );
}
