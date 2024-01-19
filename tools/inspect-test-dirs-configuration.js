import { config } from 'dotenv'
import { existsSync, readdirSync } from 'fs'


const isDirectoryExists = (directory) => existsSync(directory)
const fileCount = (directory) => {
  try {
    return readdirSync(directory).length
  } catch (error) {
    return 0
  }
}

const forCheck = [{
  param: 'WHOLE_RESPONSE_JSONS_DIR',
  answer: 'Directory with whole JSONs',
}]

config()

forCheck.forEach(({ param, answer }) => {
  const directory = String(process.env[param])
  const isExists = isDirectoryExists(directory)

  if (!isExists) {
    console.error(`${answer} - not found\n`)
  } else {
    console.log(`${answer} - found (${fileCount(directory)} files)\n`)
  }
})
