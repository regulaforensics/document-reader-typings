import path from 'path'
import fs from 'fs'

import { ProcessResponse } from '../src'


const DIRECTORY = String(process.env.WHOLE_RESPONSE_JSONS_DIR)

describe('testing whole response', () => {
  const isDirectoryExists = fs.existsSync(DIRECTORY)

  test('directory with test data have to exists', () => {
    expect(isDirectoryExists).toBe(true)
  })

  if (!isDirectoryExists) {
    return
  }

  const files = fs.readdirSync(DIRECTORY)

  files.forEach((file) => {
    const filePath = path.join(DIRECTORY, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    let isValidJSON = true
    let response = ''

    try {
      response = JSON.parse(fileContent)
    } catch (e) {
      isValidJSON = false
    }

    test(`file '${file}' should be a valid JSON`, () => {
      expect(isValidJSON).toBe(true)
    })

    test(`file '${file}' should be a valid ProcessResponse`, () => {
      const processResponse = ProcessResponse.fromPlain(response)

      expect(() => ProcessResponse.isValid(processResponse)).not.toThrow()
    })
  })
})
