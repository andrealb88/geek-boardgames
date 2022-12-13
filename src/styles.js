import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
