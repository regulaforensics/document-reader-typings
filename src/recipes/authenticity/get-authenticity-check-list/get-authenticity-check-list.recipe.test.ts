import 'reflect-metadata'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { ProcessResponse } from '@/models'
import { getAuthenticityCheckList } from './get-authenticity-check-list.recipe'


const DIRECTORY = String(process.env.PROCESS_RESPONSE_JSONS_DIR)

describe('getAuthenticityCheckList', () => {
  const files = readdirSync(DIRECTORY)

  files.forEach((file) => {
    const fileName = file.replace(/^(\.\.(\/|\\|$))+/, '');
    const filePath = join(DIRECTORY, fileName)

    if (!filePath.endsWith('.json')) {
      return
    }

    const fileContent = readFileSync(filePath, 'utf-8')

    let isValidJSON = true
    let response = ''

    try {
      response = JSON.parse(fileContent)
    } catch (e) {
      isValidJSON = false
    }

    test(`file '${file}': should be a valid JSON`, () => {
      expect(isValidJSON).toBe(true)
    })

    const docReaderResponse = ProcessResponse.fromPlain(response)


    test(`file '${file}': should return authenticity check list`, () => {
      const result = getAuthenticityCheckList(docReaderResponse)

      expect(result).toBeDefined()
    })
  })
})
