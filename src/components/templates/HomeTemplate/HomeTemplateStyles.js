import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledAboutInformation = styled.div`
  h1 {
    color:  ${props => props.darkMode ? colors.yellow : colors.main};
    font-family: ${fonts.code};
    letter-spacing: 2px;
    line-height: 80px;

    &:nth-of-type(2) {
      margin-bottom: 32px;
    }
  }

  p {
    font-size: 17px;
    color: ${props => props.darkMode ? colors.white : 'inherit'};
  }
`;