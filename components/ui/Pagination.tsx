import React from 'react'
import Link from 'next/link';

type Props = {
    page: number,
    totalPages: number,
    query: string,
    type: string,
}
function Pagination({ page, totalPages, query, type }: Props) {
  const isLastPage = page >= totalPages;
  const isFirstPage = page <= 1;

  return (
    <div className='flex flex-col gap-2 items-center'>
    <div className="flex gap-2 pt-6 justify-center">
      {isFirstPage ? (
        <span className="px-4 py-1 bg-gray-900 text-white cursor-not-allowed pointer-events-none text-sm rounded border border-white">
          Prev
        </span>
      ) : (
          <Link href={`?query=${encodeURIComponent(query)}&type=${type}&page=${page - 1}`}>
          <button className="px-4 py-1 bg-gray-900 text-white text-sm rounded border border-white hover:bg-white hover:text-black transition">
            Prev
          </button>
        </Link>
      )}

      {isLastPage ? (
        <span className="px-4 py-1 bg-gray-900 text-white cursor-not-allowed pointer-events-none text-sm rounded border border-white">
          Next
        </span>
      ) : (
          <Link href={`?query=${encodeURIComponent(query)}&type=${type}&page=${page + 1}`}>
          <button className="px-4 py-1 bg-gray-900 text-white text-sm rounded border border-white hover:bg-white hover:text-black transition">
            Next
          </button>
        </Link>
      )}
    </div>
    <span className='text-white font-medium text-l'>Page {page} of {totalPages}</span>
    </div>
  );
}

export default Pagination;
