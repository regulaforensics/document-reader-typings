import { getLightsArray, Lights, ResultType } from '@/consts'


export abstract class ContainerAbstract {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {number}
  */
  light: number

  /** @internal */
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  page_idx: number

  /** @internal */
  buf_length: number

  /**
  * Result type stored in this container (one of ResultType identifiers)
  * @type {ResultType}
  */
  result_type: ResultType

  /**
  * Get lighting scheme
  *
  * @param {DocumentPositionContainer|number} input - input
  * @returns {Lights[]}
  */
  static getLightingScheme = (input: ContainerAbstract | number): Lights[] => {
    if (typeof input === 'number') {
      return getLightsArray(input)
    }

    return getLightsArray(input.light)
  }
}
