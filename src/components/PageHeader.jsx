import styled from "styled-components";

export const PageHeader = styled.h2`
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;

  &::before {
    content: "*";
    color: red;
    margin-right: 8px;
  }
`;