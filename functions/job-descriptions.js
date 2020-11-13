exports.handler = async () => {
  const descriptions = [
    {
      name: 'Javascript',
    },
    {
      name: 'Java',
    },
    {
      name: 'Python',
    },
    {
      name: 'React',
    },
    {
      name: 'Ruby',
    },
    {
      name: 'Go',
    },
  ];
  return {
    statusCode: 200,
    body: JSON.stringify(descriptions)
  }
}