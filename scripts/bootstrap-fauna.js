const fauna = require('faunadb')
const q = fauna.query

if (!process.env.FAUNADB_SERVER_SECRET) {
  console.log('FAUNADB_SERVER_SECRET enviroment variable not found!')
  process.exit(1)
}

boostrap(process.env.FAUNADB_SERVER_SECRET).then(() => {
  console.log('Database schema has been created!')
})

function boostrap(secret) {
  const client = new faunadb.Client({ secret })

  return client.query(q.Create(q.Ref('classes'), { name: 'searches' }))
    .then(() => {
      return client.query(
        q.Create(q.Ref('indexes'), {
          name: 'all_searches',
          source: q.Ref('classes/searches')
        }))
    }).catch((e) => {
      if (e.message === 'instance not unique') {
        console.log('Database has already been bootstraped!')
      } else {
        throw e
      }
    })
}
