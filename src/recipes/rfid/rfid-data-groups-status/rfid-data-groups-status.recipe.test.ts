import 'reflect-metadata'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { ProcessResponse } from '@/models'
import { getRfidDataGroupsStatus } from './rfid-data-groups-status.recipe'


const DIRECTORY = String(process.env.PROCESS_RESPONSE_JSONS_DIR)

describe('getRfidDataGroupsStatus', () => {
  const files = readdirSync(DIRECTORY)

  files.forEach(async (file) => {
    const filePath = join(DIRECTORY, file)

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

    test('should return some results', () => {
      const result = getRfidDataGroupsStatus(docReaderResponse)

      expect(result).not.toBeNull()
      expect(result).not.toBeUndefined()
    })
  })
})
