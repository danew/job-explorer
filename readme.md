# Job Explorer

This project is a simple application that explores jobs found via [GitHub's Jobs API](https://jobs.github.com/api). It is built with [Next.js](https://nextjs.org/), [Fauna](https://fauna.com), and [Netlify](https://netlify.com/).

## Requirements
We are building a jobs board website. We will be displaying developer jobs for several cities around the world
 - The user should be able to select a city from this list (Chicago, San Francisco, Phoenix, London, Beijing, Paris)
 - The user should be able to select a job description from this list (Javascript, Java, Python, React, Ruby, Go)
 - When the user selects a city or selects a job description the list of jobs should update to match the user's selections
 - There should be a frontend and a backend. The frontend should communicate to the backend via a REST API
 - The backend should fetch the jobs from Github's public jobs API (eg. https://jobs.github.com/positions?description=javascript&location=san+francisco)
 - The backend should have a database. The database should have one table called `searches` which stores a record of each job search. The `searches` table columns should include time, description, location and ip address of the user.

## Getting started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
