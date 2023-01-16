import React from 'react'
import { StyledContainer, StyledSection } from '../atoms/Section'

export default function defaultLayout({ children }) {
  return (
    <StyledSection>
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledSection>
  )
}
