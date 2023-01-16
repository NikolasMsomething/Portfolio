import styled from 'styled-components';

import { colors } from '@/src/styles/util/index';

export const Card = styled.div`
  border: 1px solid ${props => props.darkMode ? colors.yellow : colors.main};
  padding: 1rem 1rem 0;
`;