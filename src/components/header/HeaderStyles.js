import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
  font-family: ${fonts.code};
  position: relative;

  h2 {
    color: ${props => props.darkMode ? colors.white : 'inherit'};
  }
`;