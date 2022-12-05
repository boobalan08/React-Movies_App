import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer:trailer,
    };
    setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="add-movie-form">
      <TextField
        label="Movie Name"
        variant="outlined"
        type="text"
        onChange={(event) => setName(event.target.value)}
      required
      />
      <TextField
        label="Movie Poster url"
        variant="outlined"
        type="url"
        onChange={(event) => setPoster(event.target.value)}
        required/>
      <TextField
        label="Movie Ratings"
        variant="outlined"
        type="number"
        onChange={(event) => setRating(event.target.value)}
        required/>
      <TextField
        label="Movie Summary"
        variant="outlined"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        required/>
      <TextField
        label="Movie Trailer url"
        variant="outlined"
        type="url"
        onChange={(event) => setTrailer(event.target.value)}
        required/>

      <Button variant="contained" onClick={addMovie}>
        ADD MOVIE
      </Button>
    </div>
  );
}
