import styled from 'styled-components';

import { colors,fonts } from '@/src/styles/util/index';

export const StyledAboutInformation = styled.div`
  h1 {
    color: ${colors.main};
    font-family: ${fonts.code};
    line-height: 69px;
    font-size: 80px;

    &:nth-of-type(2) {
      margin-bottom: 32px;
    }
  }

  p {
    color: ${props => props.darkMode ? colors.white : 'inherit'};
  }
`;