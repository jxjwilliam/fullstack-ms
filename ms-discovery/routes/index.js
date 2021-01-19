import express from 'express'

const router = express.Router()

router.get('/', function (req, res) {
  res.send('MS-DISCOVRY 环境变量，配置文件。')
})

module.exports = router
