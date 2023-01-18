import styled from 'styled-components';

import { colors, fonts } from '@/src/styles/util/index';

export const StyledCard = styled.div`
  border: 1px solid ${props => props.darkMode ? colors.yellow : colors.main};
  padding: 1rem 1rem;
`;

export const StyledCardTitle = styled.h2`
  color: ${props => props.darkMode ? colors.yellow : colors.main};
  border-bottom: 1px solid ${props => props.darkMode ? colors.yellow : colors.main};
  margin-bottom: 2rem;
  width: calc(100% + 32px);
  padding-left: 16px;
  margin-left: -16px; // -1 * 1rem;
`;

export const StyledCardHeader = styled.div`
  svg {
    height: fit-content;
    margin-bottom: 2rem;
    max-width: ${props => props.width ? `${props.width}px` : '240px'};
    width: 100%;
  }
`;

export const StyledCardBody = styled.div`
  p {
    color: ${props => props.darkMode ? colors.white : colors.black};
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.darkMode ? colors.yellow : colors.main};
  }

`;

export const StyledCardFooter = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding-left: 0;

  li {
    color: ${props => props.darkMode ? colors.yellow : colors.main};
    font-family: ${fonts.code};
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;