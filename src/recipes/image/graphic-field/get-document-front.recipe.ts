import { ProcessResponse } from '@/models'
import { eGraphicFieldType } from '@/consts'
import { RGraphicField } from './models'
import { getGraphicField } from './get-graphic-field.recipe'


/**
* Get document front image
* @param {ProcessResponse} input
* @returns {Promise<RGraphicField>}
*/
export const getDocumentFront = (input: ProcessResponse): Promise<RGraphicField> =>
  getGraphicField(input, eGraphicFieldType.DOCUMENT_IMAGE)
