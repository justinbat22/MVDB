import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, ErrorMsg } from './AddMovieForm.styles';

const AddMovieForm = ({ addMovie }) => {
  const [movieId, setMovieId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (!movieId) return;

    setSubmitting(true);
    setErrorMsg('');

    try {
      await addMovie(movieId);
      setMovieId('');
    } catch (err) {
      setErrorMsg(err.message);
    }
    setSubmitting(false);
  };

  return (
    <Wrapper>
      <Content onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="TMDB Movie ID"
          value={movieId}
          onChange={event => setMovieId(event.currentTarget.value)}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Movie'}
        </button>
      </Content>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Wrapper>
  );
};

AddMovieForm.propTypes = {
  addMovie: PropTypes.func
};

export default AddMovieForm;
