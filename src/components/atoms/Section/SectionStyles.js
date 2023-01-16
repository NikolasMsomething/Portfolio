import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledContainer = styled.div`
  font-family: ${fonts.primary};
  max-width: 1200px;
  width: 100%;
  transition: background-color 0.2s linear;
`;

export const StyledSection = styled.section`
height: 100vh;
  background-color: ${props => props.darkMode ? colors.darkMode : colors.beige};
  display: flex;
  justify-content: center;
  margin: auto;
  transition: background-color 0.2s linear;
`;