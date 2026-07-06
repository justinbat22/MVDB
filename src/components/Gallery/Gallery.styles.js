import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 40px auto 0;
  padding: 0 20px 50px;
`;

export const Title = styled.h2`
  font-size: var(--fontBig);
  color: var(--black);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--medGrey);
`;

export const SetCard = styled.div`
  background: var(--darkGrey);
  border: 1px solid var(--medGrey);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 18px;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
`;

export const MetaItem = styled.span`
  color: var(--white);
  background: var(--medGrey);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: var(--fontSmall);

  strong {
    color: #f5c518;
    margin-right: 4px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;