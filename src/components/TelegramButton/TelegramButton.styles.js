import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(42, 171, 238, 0.55); }
  50% { box-shadow: 0 0 0 16px rgba(42, 171, 238, 0); }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 20px 0;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  border-radius: 40px;
  background: linear-gradient(135deg, #2aabee, #229ed9);
  color: #fff;
  font-weight: bold;
  font-size: var(--fontMed);
  text-decoration: none;
  animation: ${pulse} 2.2s infinite;
  transition: transform 0.25s ease;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }

  &:hover svg {
    transform: rotate(-14deg) translateX(2px);
  }
`;