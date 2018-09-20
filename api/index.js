const express = require('express') 

// import session from 'express-session'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

// app.use(session)

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.accessToken) {
    req.session.accessToken = req.body.accessToken;
    return res.json(req.body.accessToken)
  }
  res.status(401).json({ message: '页面报错' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}