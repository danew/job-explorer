import React from 'react'
import styled from 'styled-components'
import { Header } from '@components/Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f7f7;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;