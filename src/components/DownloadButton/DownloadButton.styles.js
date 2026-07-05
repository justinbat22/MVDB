import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(245, 197, 24, 0.45); }
  50% { box-shadow: 0 0 20px rgba(245, 197, 24, 0.9); }
`;

const glowAlt = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(255, 95, 109, 0.45); }
  50% { box-shadow: 0 0 20px rgba(255, 95, 109, 0.9); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-130%) skewX(-15deg); }
  100% { transform: translateX(230%) skewX(-15deg); }
`;

export const StyledLink = styled.a`
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: bold;
  font-size: var(--fontMed);
  text-decoration: none;
  color: ${props => (props.$variant === 'alt' ? '#fff' : '#1a1a1a')};
  background: ${props =>
    props.$variant === 'alt'
      ? 'linear-gradient(135deg, #ff5f6d, #ffc371)'
      : 'linear-gradient(135deg, #f5c518, #ffe27a)'};
  animation: ${props => (props.$variant === 'alt' ? glowAlt : glow)} 2.4s infinite;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px) scale(1.06);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background: rgba(255, 255, 255, 0.45);
    animation: ${shimmer} 2.6s infinite;
  }
`;