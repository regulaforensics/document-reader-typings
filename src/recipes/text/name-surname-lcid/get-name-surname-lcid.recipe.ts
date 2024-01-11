import { ProcessResponse, TextResultContainer } from '@/models'

import { RNameSurnameLCID } from './models'
import { eCheckResult, eLCID, eVisualFieldType } from '@/consts'


const DEFAULT_VALUE = 'UNKNOWN'
const SCORE_SHIFT = 3

/**
* Get name, surname and LCID from ProcessResponse
* @param {ProcessResponse} input
* @returns {any}
*/
export const getNameSurnameLcid = (input: ProcessResponse): RNameSurnameLCID => {
  const result: RNameSurnameLCID = new RNameSurnameLCID()

  const textContainer: TextResultContainer | undefined = input.ContainerList.List
    .find((i) => i instanceof TextResultContainer)

  if (!textContainer) {
    return RNameSurnameLCID.fromPlain({
      value: DEFAULT_VALUE,
      checkResult: eCheckResult.ERROR,
      lcid: eLCID.ENGLISH_US
    })
  }

  const candidates: {
    score: number
    lcid: eLCID
    checkResult: eCheckResult
    value: string
  }[] = []

  textContainer.Text.fieldList
    .filter((i) => i.fieldType === eVisualFieldType.SURNAME_AND_GIVEN_NAMES)
    .forEach((field) => {
      if (!field.value) {
        return
      }

      let score = 1 // SURNAME_AND_GIVEN_NAMES is preferred, that's why the score is initially higher

      score = field.status === eCheckResult.OK ? score + SCORE_SHIFT : score - SCORE_SHIFT
      score = typeof field.lcid !== 'undefined' ? score + SCORE_SHIFT : score - SCORE_SHIFT
      score = field.lcid === eLCID.LATIN ? score + SCORE_SHIFT : score - SCORE_SHIFT

      candidates.push({
        score,
        lcid: field.lcid,
        checkResult: field.status,
        value: field.value
      })
    })

    //try to find name
    textContainer.Text.fieldList
      .filter((i) => i.fieldType === eVisualFieldType.GIVEN_NAMES)
      .forEach((field) => {
        // try to find surname pair
        const surname = textContainer.Text.fieldList
          .find((i) => i.fieldType === eVisualFieldType.SURNAME && i.lcid === field.lcid && i.status === field.status)

        if (!surname) {
          return
        }

        let score = 0

        score = field.status === eCheckResult.OK ? score + SCORE_SHIFT : score - SCORE_SHIFT
        score = typeof field.lcid !== 'undefined' ? score + SCORE_SHIFT : score - SCORE_SHIFT
        score = field.lcid === eLCID.LATIN ? score + SCORE_SHIFT : score - SCORE_SHIFT

        candidates.push({
          score,
          lcid: field.lcid,
          checkResult: field.status,
          value: `${surname.value} ${field.value}`
        })
      })

}
