import 'reflect-metadata'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { ProcessResponse } from '@/models'
import { RDocumentIdentification } from './models'
import { getDocumentIdentification } from './get-document-identification.recipe'


const DIRECTORY = String(process.env.PROCESS_RESPONSE_JSONS_DIR)

describe('getDocumentIdentification', () => {
  const files = readdirSync(DIRECTORY)

  files.forEach(async (file) => {
    const fileName = file.replace(/^(\.\.(\/|\\|$))+/, '')
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
    const result = getDocumentIdentification(docReaderResponse)
    const isValid = RDocumentIdentification.isValid(result)

    test('should be defined', () => {
      expect(result).toBeDefined()
    })

    test('should be valid', () => {
      expect(isValid).toBeTruthy()
    })

    test('should have at least one element', () => {
      expect(result.length).toBeGreaterThanOrEqual(1)
    })

    test('should return documentName', async () => {
      expect(result[0].documentName).toBeDefined()
    })

    test('should return pageIndex', async () => {
      expect(result[0].pageIndex).toBeDefined()
    })

    /*test('should return pageIndex', async () => {
      expect(result.pageIndex).toBeDefined()
      expect(result.pageIndex).toEqual(1)
    })*/

    /*  test('should return undefined if there is no OneCandidateContainer and allowDefault is false', async () => {
        const result = getDocumentIdentification(docReaderResponseWithoutOneCandidate, false)

        expect(result).toBeUndefined()
      })

      test('should return default value if there is no OneCandidateContainer and allowDefault is true', async () => {
        const result = getDocumentIdentification(docReaderResponseWithoutOneCandidate, true)

        expect(result).toBeDefined()
        expect(result?.documentName).toEqual('UNKNOWN')
        expect(result?.pageIndex).toEqual(1)
      })*/
  })
})
