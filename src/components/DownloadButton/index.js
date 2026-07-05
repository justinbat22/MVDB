import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './DownloadButton.styles';

const DownloadButton = ({ href, variant, children }) => {
  if (!href) return null;
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer" $variant={variant}>
      {children}
    </StyledLink>
  );
};

DownloadButton.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node
};

export default DownloadButton;