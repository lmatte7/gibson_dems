import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #004a91;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Georgia', serif;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.div`
  flex: 1;
  width: 100%;
`;