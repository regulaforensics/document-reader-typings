import { ProcessResponse } from '@/models'
import { eVisualFieldType } from '@/consts'
import { RTextFieldValue } from './models'
import { getTextFieldValue } from './get-text-field-value.recipe'


export function getDocumentOwnerNationalityCode(input: ProcessResponse): RTextFieldValue[] {
  return getTextFieldValue(input, eVisualFieldType.NATIONALITY_CODE)
}
