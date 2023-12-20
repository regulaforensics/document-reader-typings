import 'reflect-metadata'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

import { ProcessResponse } from '../dist/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const DIRECTORY = String(process.env.WHOLE_RESPONSE_JSONS_DIR)

const isDirectoryExists = fs.existsSync(DIRECTORY)

if (!isDirectoryExists) {
  console.error(`Directory ${DIRECTORY} does not exist!`)
  process.exit(1)
}

const files = fs.readdirSync(DIRECTORY)

files.forEach((file) => {
  const filePath = path.join(DIRECTORY, file)
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  let response = ''

  try {
    response = JSON.parse(fileContent)
  } catch (e) {
    console.log(`File ${file} is not valid JSON!`)
    process.exit(1)
  }

  const processResponse = ProcessResponse.fromPlain(response)

  try {
    ProcessResponse.isValid(processResponse)
  } catch (e) {
    console.log(`File ${file} is not valid ProcessResponse!`)
    process.exit(1)
  }
})
