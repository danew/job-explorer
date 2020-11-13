import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <HeaderBackground>
      <HeaderLayout>
        <Logo>
          <Link href="/">
            <a className="text-xl font-bold text-white">
              Job Explorer
            </a>
          </Link>
        </Logo>
      </HeaderLayout>
    </HeaderBackground>
  )
}

const HeaderBackground = styled.header`
  background-color: ${props => props.theme.blue};
`;

const HeaderLayout = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  
  a {
    color: #f9f7f7;
    text-decoration: none;
  }
`;