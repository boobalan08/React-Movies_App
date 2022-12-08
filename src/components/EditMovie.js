import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect } from "react";
import { useState } from "react";

const movieValidationSchema = yup.object({
  name: yup.string().required().min(1),
  poster: yup.string().required().min(8).url(),
  ratings: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().min(8).url(),
});

export function EditMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);
  return <div>{movie ? <EditMovieForm movie={movie} /> : "loading"}</div>;
}

function EditMovieForm({ movie }) {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        ratings: movie.ratings,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updateMovie) => {
        editMovie(updateMovie);
      },
    });

  const editMovie = (updateMovie) => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/movies"));
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        label="Movie Name"
        variant="outlined"
        type="text"
        value={values.name}
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />

      <TextField
        label="Movie Poster url"
        variant="outlined"
        type="text"
        value={values.poster}
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />

      <TextField
        label="Movie Ratings"
        variant="outlined"
        type="text"
        value={values.ratings}
        name="ratings"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.ratings && errors.ratings}
        helperText={touched.ratings && errors.ratings ? errors.ratings : null}
      />

      <TextField
        label="Movie Summary"
        variant="outlined"
        type="text"
        value={values.summary}
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />

      <TextField
        label="Movie Trailer url"
        variant="outlined"
        type="text"
        value={values.trailer}
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      <Button variant="contained" type="submit" color="success">
        UPDATE MOVIE
      </Button>
    </form>
  );
}


