import React from 'react'
import styled from 'styled-components'
import { useJobsContext } from '@components/JobsContext'
import useSWR from 'swr'

type GithubJob = {
  id: string,
  type: string,
  url: string,
  created_at: string,
  company: string,
  company_logo: string,
  company_url: string,
  location: string,
  title: string,
  description: string,
  how_to_apply: string,
}

export const Result: React.FC = () => {
  const { city, description } = useJobsContext()
  const { data, error } = useSWR(() => {
    if (!city || !description) {
      return null
    }
    const params = new URLSearchParams()
    params.set('location', city)
    params.set('description', description)
    return `/.netlify/functions/search-job?${params}`
  })
  return (
    <Layout>
      {(!city || !description) && <Message>Select a City and a Description to get started!</Message>}
      {city && description && !error && !data && <Message>Loading...</Message>}
      {error && <Message>Whoops, an error occurred when trying to get the positions. Try again later.</Message>}
      {data?.length === 0 && <Message>No {description} positions found in {city}</Message>}
      <ul>
        {data?.map((job: GithubJob) => (
          <li key={job.id}>
            <JobCard href={job.url} target="_blank" rel="noreferrer">
              <span>{job.company}</span>
              <span>{job.type}</span>
              <span>{job.title}</span>
            </JobCard>
          </li>
        ))}        
      </ul>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  min-height: min-content;

  @media (min-width: 48rem) {
    margin-left: 2rem;
  }

  ul {
    list-style: none;
  }
`

const JobCard = styled.a`
  display: flex;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 5px rgba(158, 147, 166, 0.2);
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.darkblue};
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 4px 5px rgba(158, 147, 166, 0.2), 0 3px 14px rgba(158, 147, 166, 0.12), 0 8px 10px rgba(158, 147, 166, 0.14);
  }

  span {
    flex-grow: 1;
    flex-basis: 0;
  }

  img {
    max-height: 50px;
    margin-right: 2rem;
  }
`

const Message = styled.p`
  display: flex;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.5;
  padding-left: 2rem;
`