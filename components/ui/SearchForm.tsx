'use client';

import React, {useState, useRef} from 'react';
import { Search } from 'lucide-react';

function SearchForm({ query }: { query: string }) {
  const [showMessage, setShowMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    const value = inputRef.current?.value.trim();

    if (!value) {
      e.preventDefault(); // stop redirect
      setShowMessage(true); // show warning

      setTimeout(() => {
        setShowMessage(false); // hide after 3 sec
      }, 3000);
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={`/SearchMovies`}
        className="mt-12"
      >
        <div className="text-white flex gap-4 py-3">
          <label className="flex gap-1">
            <input type="radio" name="type" value="movie" defaultChecked />
            Movies
          </label>
          <label className="flex gap-1">
            <input type="radio" name="type" value="tv" />
            TV Shows
          </label>
        </div>

        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            name="query"
            defaultValue={query}
            placeholder="Search Movies"
            className="bg-gray-900 text-white p-3 pr-20 md:pr-64 border border-white rounded-lg 
             placeholder:text-white placeholder:opacity-70 
             focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
             transition duration-300"
/>

          <button
            type="submit"
            className="bg-yellow-500 text-gray-950 py-3 px-10 rounded hover:bg-gray-950 hover:text-white hover:border hover:border-yellow-500 transition duration-300 hover:opacity-90"
          >
            <Search className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>

        {showMessage && (
          <p className="text-red-400 text-center mt-4">Please enter a search term</p>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
