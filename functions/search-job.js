const fetch = require('node-fetch')
const fauna = require('faunadb')
const q = fauna.query

const saveSearch = async (location, description, ip) => {
  const client = new fauna.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
  const data = {
    time: new Date().valueOf(),
    description, 
    location,
    ip
  }
  return client.query(q.Create(q.Ref('classes/searches'), { data })).catch((error) => {
    console.log('error', error)
  })
}

exports.handler = async (event) => {
  const { location, description } = event.queryStringParameters
  if (!location || !description) {
    return {
      statusCode: 404,
    }
  }

  try {
    const params = new URLSearchParams()
    params.set('location', location)
    params.set('description', description)

    const ip = event.identity && event.identity.sourceIP || null
    saveSearch(location, description, ip)

    const response = await fetch(`https://jobs.github.com/positions.json?${params}`)
    const positions = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(positions),
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
    }
  }
}