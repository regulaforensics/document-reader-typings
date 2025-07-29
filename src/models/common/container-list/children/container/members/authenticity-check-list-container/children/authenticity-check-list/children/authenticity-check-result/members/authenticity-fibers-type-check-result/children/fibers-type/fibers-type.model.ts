import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  ValidateNested,
  validateSync,
} from 'class-validator'
import { FiberResult } from '@regulaforensics/document-reader-webclient'
import { Expose, plainToClass, Type } from 'class-transformer'

import { Rect } from '@/models/common/rect'
import { eAuthenticity, eLights } from '@/consts'
import { DocReaderTypeError } from '@/errors'
import { aAuthenticityCheckResultItem } from '../../../../authenticity-check-result-item.abstract'

/**
 * Structure serves for storing the result of checking of one fluorescent fibers
 * type for UV light image. When there is no error.
 */
export interface iFibersType extends aAuthenticityCheckResultItem, FiberResult {
  /**
   * Type of the performed check
   * @type {eAuthenticity.UV_FIBERS}
   */
  Type: eAuthenticity.UV_FIBERS
}

/**
 * Structure serves for storing the result of checking of one fluorescent fibers
 * type for UV light image. When there is no error.
 */
@Expose()
export class FibersType extends aAuthenticityCheckResultItem implements iFibersType {
  /**
   * Number of RectArray, Width, Length, Area items
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  RectCount: number

  /**
   * Expected fibers number
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  ExpectedCount: number

  /**
   * @type {eLights}
   */
  @IsOptional()
  @IsEnum(eLights)
  LightValue?: eLights

  /**
   * For UV_Background authentication result type
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  LightDisp?: number

  /**
   * Coordinates of located areas for defined fibers type
   * @type {Rect[]}
   */
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Rect)
  RectArray: Rect[]

  /**
   * Fibers’ width value for RectArray areas (in pixels)
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Width: number[]

  /**
   * Fibers’ length value for RectArray areas (in pixels)
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Length: number[]

  /**
   * Fibers’ area value for RectArray areas (in pixels)
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  Area: number[]

  /**
   * Fibers’ color (B, G, R)
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @ArrayMaxSize(3)
  @ArrayMinSize(3)
  @IsInt({ each: true })
  ColorValues: number[]

  /**
   * Type of the performed check
   * @type {eAuthenticity.UV_FIBERS}
   */
  @IsDefined()
  @IsIn([eAuthenticity.UV_FIBERS])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.UV_FIBERS

  /**
   * Creates an instance of FibersTypeElement.
   * @param {iFibersType} input - plain object
   * @returns {FibersType}
   */
  static fromPlain = (input: unknown): FibersType => plainToClass(FibersType, input)

  /**
   * Check if the given instance of FibersTypeElement is valid
   * @throws {DocReaderTypeError}
   * @param {FibersType} input - instance of FibersTypeElement to be checked
   * @returns {true | never}
   */
  static validate = (input: FibersType): true | never => {
    const errors = validateSync(FibersType.fromPlain(input))

    if (errors.length) {
      throw new DocReaderTypeError(
        'FibersTypeElement validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
