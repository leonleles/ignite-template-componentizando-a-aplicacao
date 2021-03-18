import React from 'react';

interface GenreContextProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MoviesContextProps {
  selectedGenreId: number,
  setSelectedGenreId: (val: number) => void,
  selectedGenre: GenreContextProps,
  setSelectedGenre: (val: GenreContextProps) => void
}

export default React.createContext({} as MoviesContextProps);