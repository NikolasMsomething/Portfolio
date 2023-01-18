import styled from 'styled-components';

import { colors } from '@/src/styles/util/index';

export const StyledExperienceBio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));

  h1 {
    color: ${props => props.darkMode ? colors.yellow : colors.main};
  }

  p {
    color: ${props => props.darkMode ? colors.white : colors.black};
  }

  .floral {
    max-width: 360px;
    transform: rotate(36deg);
  }
`;