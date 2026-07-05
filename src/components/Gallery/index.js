import React from 'react';
import PropTypes from 'prop-types';
import DownloadButton from '../DownloadButton';
import {
  Wrapper,
  Title,
  SetCard,
  MetaRow,
  MetaItem,
  Buttons
} from './Gallery.styles';

const Gallery = ({ downloadSets }) => {
  if (!downloadSets || downloadSets.length === 0) return null;

  return (
    <Wrapper>
      <Title>Gallery</Title>
      {downloadSets.map((set, index) => (
        <SetCard key={index}>
          <MetaRow>
            {set.quality && (
              <MetaItem>
                <strong>Quality:</strong> {set.quality}
              </MetaItem>
            )}
            {set.codec && (
              <MetaItem>
                <strong>Codec:</strong> {set.codec}
              </MetaItem>
            )}
            {set.language && (
              <MetaItem>
                <strong>Language:</strong> {set.language}
              </MetaItem>
            )}
            {set.size && (
              <MetaItem>
                <strong>Size:</strong> {set.size}
              </MetaItem>
            )}
          </MetaRow>
          <Buttons>
            <DownloadButton href={set.button1Url}>Download</DownloadButton>
            <DownloadButton href={set.button2Url} variant="alt">
              Watch Online
            </DownloadButton>
          </Buttons>
        </SetCard>
      ))}
    </Wrapper>
  );
};

Gallery.propTypes = {
  downloadSets: PropTypes.array
};

export default Gallery;