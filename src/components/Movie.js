import React from "react";
import { useParams } from 'react-router-dom';
//Components
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from "./MovieInfoBar";
import TelegramButton from './TelegramButton';
import Gallery from './Gallery';
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useMovieExtras } from "../hooks/useMovieExtras";

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error} = useMovieFetch(movieId);
    const { downloadSets } = useMovieExtras(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something Went wrong...</div>;

    return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar 
         time={movie.runtime}
         budget={movie.budget}
         revenue={movie.revenue}
      />
      <TelegramButton />
      <Gallery downloadSets={downloadSets} />
    </>
    );
};

export default Movie;