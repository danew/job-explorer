import React from 'react'
import styled from 'styled-components'
import { useJobsContext } from '@components/JobsContext';

export const Result: React.FC = () => {
  const { city, description } = useJobsContext();

  // TODO: Error handling
  return (
    <Layout>
      {city} {description}
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;