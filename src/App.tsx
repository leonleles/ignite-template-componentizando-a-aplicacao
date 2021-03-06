import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import MovesContext from './contexts/MoviesContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovesContext.Provider value={{
        selectedGenreId,
        setSelectedGenreId,
        selectedGenre,
        setSelectedGenre
      }}>
        <SideBar />
        <Content />
      </MovesContext.Provider>
    </div>
  )
}