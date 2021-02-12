const express = require('express')
const router = express.Router()

router.post('/pdf', (req, res, next) => {
  res.send('POST Route hit')
})

module.exports = router
