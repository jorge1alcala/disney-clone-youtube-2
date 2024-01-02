import { getDicoverMovies } from "@/lib/getMobies";
import Carouselbanner from "./Carouselbanner ";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselbannerWrapper({ id, keywords }: Props) {
  const movies = await getDicoverMovies(id, keywords);
  return <Carouselbanner movies={movies} />;
}

export default CarouselbannerWrapper;
