import { ProcessResponse } from '@/models'
import { eVisualFieldType } from '@/consts'
import { RTextFieldValue } from './models'
import { getTextFieldValue } from './get-text-field-value.recipe'


/**
* Returns document issuing state name
* @param {ProcessResponse} input
* @returns {RTextFieldValue[]}
*/
export function getDocumentIssuingStateName(input: ProcessResponse): RTextFieldValue[] {
  return getTextFieldValue(input, eVisualFieldType.ISSUING_STATE_NAME)
}
