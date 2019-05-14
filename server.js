const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/results/:searchBy/:sortBy/:sortOrder/:search/:offset/:limit', (req, res) => {
        
      const actualPage = '/results'
      const queryParams = {
      searchBy: req.params.searchBy,
      sortBy: req.params.sortBy,
      sortOrder: req.params.sortOrder,
      search: req.params.search,
      offset: req.params.offset,
      limit: req.params.limit,
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })