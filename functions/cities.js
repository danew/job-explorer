exports.handler = async () => {
  const cities = [
    {
      name: 'Chicago',
    },
    {
      name: 'San Francisco',
    },
    {
      name: 'Phoenix',
    },
    {
      name: 'London',
    },
    {
      name: 'Beijing',
    },
    {
      name: 'Paris',
    },
  ]
  return {
    statusCode: 200,
    body: JSON.stringify(cities),
  }
}