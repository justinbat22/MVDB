import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  padding: 60px 20px;
  background: var(--darkGrey);
  color: var(--white);
`;

export const Title = styled.h1`
  font-size: var(--fontBig);
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 320px;

  input {
    font-size: var(--fontMed);
    padding: 12px 16px;
    border: 0;
    border-radius: 20px;
    background: var(--medGrey);
    color: var(--white);
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 12px 16px;
    border: 0;
    border-radius: 20px;
    background: var(--white);
    color: var(--darkGrey);
    font-weight: bold;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const ErrorMsg = styled.p`
  color: #ff6b6b;
  margin-top: 10px;
`;

export const LogoutLink = styled.button`
  background: none;
  border: none;
  color: var(--medGrey);
  font-size: var(--fontSmall);
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    color: var(--white);
  }
`;
