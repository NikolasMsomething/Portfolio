import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledNav = styled.nav`
  background-color: ${props => props.darkMode ? colors.darkMode : colors.beige};
  font-family: ${fonts.code};
  font-size: 16px;
  padding: 16px;
  position: fixed;
  bottom: 0;
  max-width: 1200px;
  width: 100%;
  transition: background-color 0.2s linear;

  a {
    color: ${props => props.darkMode ? colors.yellow : colors.main};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      border-color: red;
      border-bottom: 1px dotted black;
    }

    &:visited {
      color: ${props => props.darkMode ? colors.yellow : colors.main};
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;