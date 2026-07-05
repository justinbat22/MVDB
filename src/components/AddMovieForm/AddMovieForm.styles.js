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
  flex-direction: column;
  gap: 16px;
  max-width: 620px;
  width: 100%;

  > input {
    font-size: var(--fontMed);
    padding: 10px 15px;
    border: 0;
    border-radius: 20px;
    background: var(--medGrey);
    color: var(--white);
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  > button {
    padding: 10px 20px;
    border: 0;
    border-radius: 20px;
    background: var(--white);
    color: var(--darkGrey);
    font-weight: bold;
    cursor: pointer;
  }

  > button:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const SetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SetCard = styled.div`
  border: 1px solid var(--medGrey);
  border-radius: 12px;
  padding: 14px;
`;

export const SetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  input {
    font-size: var(--fontSmall);
    padding: 9px 14px;
    border: 0;
    border-radius: 16px;
    background: var(--medGrey);
    color: var(--white);
    width: 100%;
  }

  input:focus {
    outline: none;
  }
`;

export const SetActions = styled.div`
  display: flex;
`;

export const AddSetButton = styled.button`
  background: none;
  border: 1px dashed var(--medGrey);
  color: var(--white);
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-size: var(--fontSmall);

  &:hover {
    border-color: var(--white);
  }
`;

export const RemoveSetButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: var(--fontSmall);
  margin-top: 10px;
  cursor: pointer;
  padding: 0;
`;

export const ErrorMsg = styled.p`
  color: #ff6b6b;
  margin: 10px 0 0;
`;