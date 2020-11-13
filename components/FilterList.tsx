import React from 'react'
import styled from 'styled-components'

type ListItem = {
  name: string
}

type FilterListProps = {
  title: string
  items: ListItem[]
  handleChange: Function
}

export const FilterList: React.FC<FilterListProps> = ({ title, items, handleChange }) => {
  return (
    <Layout>
      <h2>{ title }</h2>
      {items?.map(({ name }) => (
        <label key={name}>
          <input 
            type="radio" 
            name={title} 
            value={name}
            onChange={(e) => handleChange(e.target.value)}
          />
          {name}
        </label>
      ))}
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
  }
  input[type=radio] {
    margin-right: 0.5rem;
  }
`
