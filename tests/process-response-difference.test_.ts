/**
* There is no need to cover whole response with types, only the most important parts.
* This test is disabled.
* @deprecated
*/
import { join } from 'path'
import { existsSync, readdirSync, readFileSync } from 'fs'
import { diff } from 'deep-diff'

import { ProcessResponse } from '../src'


const pathsExclusions = readFileSync(join(__dirname, '..', '.excluded'), 'utf8')
  .trim()
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean)
  .map(exclusion => new RegExp(`^${exclusion.replace(/\*/g, '.*')}$`))

const isPathExcluded = (path: string) => !pathsExclusions.every(exclusion => !exclusion.test(path))


const DIRECTORY = String(process.env.PROCESS_RESPONSE_JSONS_DIR)

describe('testing ProcessResponse diff', () => {
  const isDirectoryExists = existsSync(DIRECTORY)

  test('directory with test data have to exists', () => {
    expect(isDirectoryExists).toBe(true)
  })

  if (!isDirectoryExists) {
    return
  }

  const files = readdirSync(DIRECTORY)

  files.forEach((file) => {
    const filePath = join(DIRECTORY, file)
    const fileContent = readFileSync(filePath, 'utf-8')

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

    test(`file '${file}' should not have any diff`, () => {
      const processResponse = ProcessResponse.fromPlain(response)

      const differences = diff(response, processResponse) || []

      const paths = differences.map((difference) => {
        // @ts-ignore
        const { path = [], index = undefined, ...rest } = difference

        const pathString = path.join('.')
        return index ? `${pathString}.${index}` : pathString
      })

      const filteredPaths = paths.filter(path => !isPathExcluded(path))

      expect(filteredPaths.length).toEqual(0)
    })
  })
})
