import styled from 'styled-components';

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin-right: 5px;
`;


export const IconRow = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;