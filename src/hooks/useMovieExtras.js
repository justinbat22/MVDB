import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

// Live-reads the download-sets the admin attached to this movie in Firestore.
// This is separate from useMovieFetch, which pulls the rest of the
// movie's info straight from TMDB.
export const useMovieExtras = movieId => {
  const [downloadSets, setDownloadSets] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const ref = doc(db, 'movies', String(movieId));
    const unsubscribe = onSnapshot(ref, snapshot => {
      const data = snapshot.data();
      setDownloadSets((data && data.downloadSets) || []);
    });

    return () => unsubscribe();
  }, [movieId]);

  return { downloadSets };
};