import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: var(--darkGrey);
`;

export const Content = styled.form`
  display: flex;
  gap: 10px;
  max-width: var(--maxWidth);
  width: 100%;

  input {
    flex: 1;
    font-size: var(--fontMed);
    padding: 10px 15px;
    border: 0;
    border-radius: 20px;
    background: var(--medGrey);
    color: var(--white);
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 10px 20px;
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
  margin: 10px 0 0;
`;
