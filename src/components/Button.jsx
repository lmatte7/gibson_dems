
import styled from 'styled-components';


export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;