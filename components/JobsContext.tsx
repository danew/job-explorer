import React, { useContext, useState } from 'react'

interface JobsInterface {
  city?: string;
  setCity: Function
  description?: string;
  setDescription: Function;
}

export const JobsContext = React.createContext<JobsInterface | undefined>(undefined)

export const JobsContextProvider: React.FC = ({ children }) => {
  const [city, setCity] = useState()
  const [description, setDescription] = useState()
  return (
    <JobsContext.Provider value={{ city, setCity, description, setDescription }}>
      { children }
    </JobsContext.Provider>
  )
}

export const useJobsContext = () => {
  const jobsContext = useContext(JobsContext)
  if (!jobsContext) {
    throw new Error('useJobsContext must be used within the JobsContext.Provider')
  }
  return jobsContext
}
