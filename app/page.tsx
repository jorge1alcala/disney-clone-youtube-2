import CarouselbannerWrapper from "@/components/CarouselbannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getTopRatedMovies,
  getUpcomingMovies,
  getpopularMovies,
} from "@/lib/getMobies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getpopularMovies();
  return (
    <main>
      {/* CarouselbannerWrapper*/}
      <CarouselbannerWrapper />

      <div className="flex flex-col space-y-2 xl:-m-8">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
