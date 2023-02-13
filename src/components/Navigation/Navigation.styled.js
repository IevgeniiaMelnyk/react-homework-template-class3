import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  &.active {
    color: blue;
  }
`;
