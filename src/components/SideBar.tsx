import { useEffect, useState, useContext } from 'react';

import { Button } from '../components/Button';

import { api } from '../services/api';

import MoviesContext from '../contexts/MoviesContext';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const { setSelectedGenreId, selectedGenreId } = useContext(MoviesContext);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  );
}