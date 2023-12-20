import { config } from 'dotenv'
import { existsSync } from 'fs'


const forCheck = [
  'WHOLE_RESPONSE_JSONS_DIR'
]
const isDirectoryExists = (directory) => existsSync(directory)

config()

forCheck.forEach(({ param, answer }) => {
  const directory = String(process.env[param])
  const isExists = isDirectoryExists(directory)

  if (!isExists) {
    console.error(answer.replace('${DIRECTORY}', directory))
    process.exit(1)
  }
}
