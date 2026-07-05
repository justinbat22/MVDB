import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Content,
  ErrorMsg,
  SetsWrapper,
  SetCard,
  SetGrid,
  SetActions,
  AddSetButton,
  RemoveSetButton
} from './AddMovieForm.styles';

const emptySet = () => ({
  quality: '',
  codec: '',
  language: '',
  size: '',
  button1Url: '',
  button2Url: ''
});

const AddMovieForm = ({ addMovie }) => {
  const [movieId, setMovieId] = useState('');
  const [sets, setSets] = useState([emptySet()]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const updateSet = (index, field, value) => {
    setSets(prev =>
      prev.map((set, i) => (i === index ? { ...set, [field]: value } : set))
    );
  };

  const addSet = () => setSets(prev => [...prev, emptySet()]);

  const removeSet = index => setSets(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = async event => {
    event.preventDefault();
    if (!movieId) return;

    setSubmitting(true);
    setErrorMsg('');

    // drop any set the admin left completely blank
    const cleanSets = sets.filter(set =>
      Object.values(set).some(value => value.trim() !== '')
    );

    try {
      await addMovie(movieId, cleanSets);
      setMovieId('');
      setSets([emptySet()]);
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

        <SetsWrapper>
          {sets.map((set, index) => (
            <SetCard key={index}>
              <SetGrid>
                <input
                  placeholder="Quality (e.g. 1080p)"
                  value={set.quality}
                  onChange={e => updateSet(index, 'quality', e.currentTarget.value)}
                />
                <input
                  placeholder="Codec (e.g. AV1)"
                  value={set.codec}
                  onChange={e => updateSet(index, 'codec', e.currentTarget.value)}
                />
                <input
                  placeholder="Language (e.g. Tamil, English)"
                  value={set.language}
                  onChange={e => updateSet(index, 'language', e.currentTarget.value)}
                />
                <input
                  placeholder="Size (e.g. 2GB)"
                  value={set.size}
                  onChange={e => updateSet(index, 'size', e.currentTarget.value)}
                />
                <input
                  placeholder="Button 1 URL (Download)"
                  value={set.button1Url}
                  onChange={e => updateSet(index, 'button1Url', e.currentTarget.value)}
                />
                <input
                  placeholder="Button 2 URL (Watch Online)"
                  value={set.button2Url}
                  onChange={e => updateSet(index, 'button2Url', e.currentTarget.value)}
                />
              </SetGrid>
              {sets.length > 1 && (
                <RemoveSetButton type="button" onClick={() => removeSet(index)}>
                  Remove this set
                </RemoveSetButton>
              )}
            </SetCard>
          ))}
          <SetActions>
            <AddSetButton type="button" onClick={addSet}>
              + Add Another Set
            </AddSetButton>
          </SetActions>
        </SetsWrapper>

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