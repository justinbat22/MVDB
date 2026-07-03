import { useState, useEffect } from "react";
//API
import API from '../API';
import { db } from '../firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  startAt,
  endAt,
  onSnapshot
} from 'firebase/firestore';

const PAGE_SIZE = 20;

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [state, setState] = useState({ results: [], hasMore: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // reset how many results we're showing whenever the search changes
  useEffect(() => {
    setPageSize(PAGE_SIZE);
  }, [searchTerm]);

  // live-subscribe to the shared Firestore "movies" collection.
  // onSnapshot means every device gets pushed updates in real time -
  // no manual refetching needed after an add.
  useEffect(() => {
    setLoading(true);
    setError(false);

    const moviesRef = collection(db, 'movies');
    const term = searchTerm.trim().toLowerCase();

    const q = term
      ? query(
          moviesRef,
          orderBy('title_lower'),
          startAt(term),
          endAt(term + '\uf8ff'),
          limit(pageSize)
        )
      : query(moviesRef, orderBy('addedAt', 'desc'), limit(pageSize));

    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        const results = snapshot.docs.map(docSnap => docSnap.data());
        setState({ results, hasMore: results.length === pageSize });
        setLoading(false);
      },
      () => {
        setError(true);
        setLoading(false);
      }
    );

    // stop listening when the query changes or the component unmounts
    return () => unsubscribe();
  }, [searchTerm, pageSize]);

  const loadMore = () => setPageSize(prev => prev + PAGE_SIZE);

  // add a movie by TMDB id to the shared list
  const addMovie = async movieId => {
    const movie = await API.fetchMovie(movieId);
    if (!movie || movie.success === false) {
      throw new Error('Movie not found. Double check the TMDB ID.');
    }
    await API.addSharedMovie(movie);
  };

  return { state, loading, error, searchTerm, setSearchTerm, loadMore, addMovie };
};
