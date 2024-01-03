import { getLightsArray, eLights, eResultType } from '@/consts'


export abstract class aContainer {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  * @memberof aContainer
  */
  light: number

  /**
  * @internal
  * @memberof aContainer
  */
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  * @memberof aContainer
  */
  page_idx: number

  /**
  * @internal
  * @memberof aContainer
  */
  buf_length: number

  /**
  * Result type stored in this container (one of ResultType identifiers)
  * @type {eResultType}
  * @memberof aContainer
  */
  result_type: eResultType

  /**
  * Get lighting scheme
  *
  * @param {DocumentPositionContainer|number} input - input
  * @returns {eLights[]}
  */
  static getLightingScheme = (input: aContainer | number): eLights[] => {
    if (typeof input === 'number') {
      return getLightsArray(input)
    }

    return getLightsArray(input.light)
  }
}
