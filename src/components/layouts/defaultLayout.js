import React from 'react'
import { StyledContainer, StyledSection } from '../atoms/Section'

export default function DefaultLayout({ children }) {
  return (
    <StyledSection>
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledSection>
  )
}
