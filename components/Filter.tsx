import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { FilterList } from '@components/FilterList'
import { useJobsContext } from '@components/JobsContext'

export const Filter: React.FC = () => {
  const { setCity, setDescription } = useJobsContext()
  const { data: cities } = useSWR('/.netlify/functions/cities')
  const { data: descriptions } = useSWR('/.netlify/functions/job-descriptions')

  // TODO: Error handling
  return (
    <Layout>
      <FilterList title="City" items={cities} handleChange={setCity} />
      <FilterList title="Job Description" items={descriptions} handleChange={setDescription} />
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  @media (min-width: 48rem) {
    flex-direction: column;
  }
`