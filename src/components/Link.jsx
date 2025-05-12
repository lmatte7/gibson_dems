import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 1rem;
  background-color: white;
  color: #004a91;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;


export const IconLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
  color: #ffcc00;
  }
`;