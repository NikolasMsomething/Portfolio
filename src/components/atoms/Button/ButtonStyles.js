import Link from 'next/link';
import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledButton = styled(Link)`
  color: ${props => props.darkMode ? colors.yellow : colors.main};
  display: block;
  position: relative;
  font-family: ${fonts.code};
  font-weight: 800;
  margin-top: 32px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid  ${props => props.darkMode ? colors.yellow : colors.main};
  padding: 0.75em 1em;
  width: fit-content;

  &:visited {
    color: ${props => props.darkMode ? colors.yellow : colors.main};
  }

  &:before {
    content: '';
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    border: 1px solid ${props => props.darkMode ? colors.yellow : colors.main};
  }
`;
