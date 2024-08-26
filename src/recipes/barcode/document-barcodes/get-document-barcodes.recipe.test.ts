import 'reflect-metadata'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { ProcessResponse } from '@/models'
import { RDocumentBarcode } from './models'
import { getDocumentBarcodes } from './get-document-barcodes.recipe'


const DIRECTORY = String(process.env.PROCESS_RESPONSE_JSONS_DIR)

describe('getDocumentBarcodes', () => {
  const files = readdirSync(DIRECTORY)

  files.forEach((file) => {
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
    const result = getDocumentBarcodes(docReaderResponse)
    const isValid = RDocumentBarcode.isValid(result)

    test(`file '${file}': should return valid array of images`, () => {
      expect(isValid).toBe(true)
    })
  })
})
