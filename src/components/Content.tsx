import { useContext } from "react";
import { List, ListRowRenderer } from "react-virtualized";
import { MovieCard } from "../components/MovieCard";
import MoviesContext from "../contexts/MoviesContext";
interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface ContentProps {
  movies: Array<MovieProps>;
}

export function Content({ movies }: ContentProps) {
  const { selectedGenre } = useContext(MoviesContext);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const movie = movies[index];

    return (
      <div key={key} style={style}>
        <MovieCard
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      </div>
    );
  };

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          <List
            height={680}
            rowHeight={347}
            width={900}
            overscanRowCount={3}
            // autoWidth={true}
            rowCount={movies.length}
            rowRenderer={rowRenderer}
          />
        </div>
      </main>
    </div>
  );
}
