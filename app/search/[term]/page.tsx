import MoviesCarousel from "@/components/MoviesCarousel";
import { getSearchedMovies, getpopularMovies } from "@/lib/getMobies";
import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

async function Search({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getpopularMovies();

  return (
    <div className="max-w7xl mx-auto">
      <div className=" flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className=" text-6xl font-bold px-10">Relusts for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default Search;
