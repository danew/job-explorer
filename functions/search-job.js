const fetch = require('node-fetch');

exports.handler = async ({ queryStringParameters }) => {
  if (!queryStringParameters.location || !queryStringParameters.description) {
    return {
      statusCode: 404,
    }
  }

  try {
    const params = new URLSearchParams();
    params.set('location', queryStringParameters.location);
    params.set('description', queryStringParameters.description);

    const response = await fetch(`https://jobs.github.com/positions.json?${params}`);
    const positions = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(positions),
    }
  } catch (e) {
    return {
      statusCode: 500,
    }
  }
}