import { useEffect, useState, useContext, useCallback } from "react";

import { Button } from "../components/Button";

import { api } from "../services/api";

import MoviesContext from "../contexts/MoviesContext";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SidebarProps {
  genres: Array<GenreResponseProps>;
}

export function SideBar({ genres }: SidebarProps) {
  const { setSelectedGenreId, selectedGenreId } = useContext(MoviesContext);

  const handleClickButton = useCallback(async (id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
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
