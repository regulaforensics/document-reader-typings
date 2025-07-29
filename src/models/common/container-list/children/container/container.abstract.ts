import { ResultItem, Light } from '@regulaforensics/document-reader-webclient'
import { IsDefined, IsEnum, IsInt, IsOptional } from 'class-validator'

import { getLightsArray, eLights, eResultType } from '@/consts'

export abstract class aContainer implements ResultItem {
  /**
   * @internal
   */
  @IsOptional()
  @IsInt()
  buf_length?: number

  /**
   * Lighting scheme code for the given result (used only for images)
   * @type {eLights|undefined}
   */
  @IsOptional()
  @IsEnum(eLights)
  light?: eLights

  /**
   * @internal
   */
  @IsOptional()
  @IsInt()
  list_idx?: number

  /**
   * Page index (when working with multi-page document)
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  page_idx?: number

  /**
   * Result type stored in the container
   * @type {eResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  result_type: eResultType

  /**
   * Get lighting scheme
   *
   * @param {aContainer|number} input - input
   * @returns {Light[]}
   */
  static getLightingScheme = (input: ResultItem | number): Light[] => {
    if (typeof input === 'number') {
      return getLightsArray(input)
    }

    return getLightsArray(input?.light ?? Light.OFF)
  }
}
