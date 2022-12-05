import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://63899fddc5356b25a203ee0c.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovies());
  };

  return (
    <>
      <div className="movie-list">
        {movieList.map((mv) => (
          <div key={mv.id}>
            <Movie
              id={mv.id}
              movie={mv}
              deleteButton={
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteMovie(mv.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
