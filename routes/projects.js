const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
  console.log("hey")
  res.send("")
})

module.exports = router