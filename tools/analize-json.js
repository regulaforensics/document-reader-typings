import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import lodash from 'lodash'
import { fileURLToPath } from 'url'
import deepdiff from 'deep-diff'
import path from 'path'
import { check } from 'recheck'

import { ProcessResponse } from '../dist/index.js'


const { merge, values } = lodash
const { diff } = deepdiff

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathsExclusions = fs
  .readFileSync(path.join(__dirname, '..', '.excluded'), 'utf8')
  .trim()
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean)
  .map(async exclusion => {
    const regexPattern = `^${exclusion.replace(/\*/g, '.*')}$`
    await check(regexPattern, '')
    return new RegExp(regexPattern)
  })

const isPathExcluded = (path) => !pathsExclusions.every(exclusion => !exclusion.test(path))

const simplifyErrors = (property, errors) => {
  let result= {}

  for (let i = 0; i < errors.length; i++) {
    const subProperty = errors[i].property
    const fieldPath = property ? `${property}.${subProperty}` : subProperty

    if (errors[i].children && errors[i].children.length) {
      result = merge(result, simplifyErrors(fieldPath, errors[i].children))
    }

    if (errors[i].constraints) {
      result[fieldPath] = {
        errors: values(merge(errors[i].constraints, result[fieldPath])),
        value: errors[i].value,
      }
    }
  }

  return result
}

const argv = yargs(hideBin(process.argv))
  .options({
    file: {
      alias: 'f',
      describe: 'File path',
      demandOption: true,
      type: 'string',
    },
    fileType: {
      alias: 't',
      describe: 'File type',
      default: 'Not specified',
      type: 'string',
    },
    analyzeDifference: {
      alias: 'd',
      describe: 'Analyze difference between parsed and original file',
      default: false,
      type: 'boolean',
    }
  })
  .argv

const { file, fileType, analyzeDifference } = argv
let fileContent = ''

try {
  fileContent = fs.readFileSync(file, 'utf8')
} catch (err) {
  console.error('Error reading file:', err)
  process.exit(1)
}

try {
  fileContent = JSON.parse(fileContent)
} catch (err) {
  console.error('Error parsing file:', err)
  process.exit(1)
}

const entity = ProcessResponse

// todo: add more file types
switch (fileType) {

}

const parsed = entity.fromPlain(fileContent)
let isValid = true

try {
  entity.validate(parsed)
} catch (error) {
  const errors = error.errors

  const simplifiedErrors = simplifyErrors('', errors)

  console.log('Errors:', JSON.stringify(simplifiedErrors, null, 2))
  isValid = false
}

if (analyzeDifference) {
  let differences = diff(fileContent, parsed) || []

  differences = differences.map((difference) => {
    const { lhs, rhs, item, ...rest } = difference

    return rest
  })

  differences = differences.map((difference) => {
    const { path = [], index, ...rest } = difference

    const pathString = path.join('.')
    const pathWithIndex = index ? `${pathString}.${index}` : pathString

    return {
      path: pathWithIndex,
      ...rest,
    }
  })

  differences = differences.filter(difference => !isPathExcluded(difference.path))


  differences = differences.map((difference) => {
    const { kind, ...rest } = difference
    let kindValue = ''

    switch (kind) {
      case 'N':
        kindValue = 'newly added property/element'
      break
      case 'D':
        kindValue = 'property/element was deleted'
        break
      case 'E':
        kindValue = 'property/element was edited'
        break
      case 'A':
        kindValue = 'change occurred within an array'
        break
    }


    return {
      kind: kindValue,
      ...rest,
    }
  })

  if (differences.length) {
    console.log('Differences:', JSON.stringify(differences, null, 2))
    isValid = false
  }
}

if (isValid) {
  console.log('File is valid')
}
