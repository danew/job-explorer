import { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '@components/Layout'
import { Filter } from '@components/Filter'
import { Result } from '@components/Result'
import { JobsContextProvider } from '@components/JobsContext';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <JobsContextProvider>
        <JobsLayout>
          <Filter />
          <Result />
        </JobsLayout>
      </JobsContextProvider>
    </Layout>
  )
}

export default HomePage;

const JobsLayout = styled.div`
  display: flex;
`;