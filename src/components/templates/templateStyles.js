import styled from 'styled-components';

export const StyledTemplateContainer = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(560px, 1fr));
  margin: 64px 0;
  padding: 1rem;

  svg {
    color: red;
  }
`;