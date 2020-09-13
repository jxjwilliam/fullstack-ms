const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

const SOURCE_URL = 'http://localhost:3800/msconfig/'

const MS = 'localhost'
const FILE = '.env'

const getService = async function (service) {
  let msd = ''
  if (/^ms-/.test(service)) msd = service
  else msd = `ms-${service}`

  msd = path.join(__dirname, '..', msd)

  if (!fs.existsSync(msd)) {
    return console.log('文件目录不存在。', msd)
  }

  const url = `${SOURCE_URL}${MS}/${service}`
  try {
    const contents = await fetch(url, { method: 'GET' }).then(result =>
      result.json()
    )

    const fpath = path.join(msd, FILE)

    let str = ''
    Object.keys(contents).forEach(item => {
      const value = contents[item]
      str += `${item}=${value}\r\n`
    })

    console.log('文件输出：', fpath, str)

    fs.writeFileSync(fpath, str, { encoding: 'utf8', flag: 'w' })

    const saved = fs.readFileSync(fpath, 'utf8')
    console.log(saved)
    return saved
  } catch (error) {
    throw new Error(error)
  }
}

const service = process.argv.slice(2)
if (!service) {
  console.log('请指明什么微服务？')
} else {
  getService(service)
}
