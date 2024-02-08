import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsEnum,
  IsIn,
  IsInt,
  ValidateNested,
  validateSync
} from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { eAuthenticity, eCheckDiagnose, eCheckResult } from '@/consts'
import { Default } from '@/decorators'
import { DocReaderTypeError } from '@/errors'


/**
* Structure serves for storing the result of checking of one fluorescent fibers
* type for UV light image. When there is no error.
*/
export interface iFibersType {
  /**
  * Type of the performed check
  * @type {eAuthenticity.UV_FIBERS}
  */
  Type: eAuthenticity.UV_FIBERS

  /**
  * Element responsible for the results of the checks
  * @type {eCheckResult}
  */
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  ElementDiagnose: eCheckDiagnose

  /**
  * Number of RectArray, Width, Length, Area items
  * @type {number}
  */
  RectCount: number

  /**
  * Coordinates of located areas for defined fibers type
  * @type {iRect[]}
  */
  RectArray: iRect[]

  /**
  * Fibers’ width value for RectArray areas (in pixels)
  * @type {number[]}
  */
  Width: number[]

  /**
  * Fibers’ length value for RectArray areas (in pixels)
  * @type {number[]}
  */
  Length: number[]

  /**
  * Fibers’ area value for RectArray areas (in pixels)
  * @type {number[]}
  */
  Area: number[]

  /**
  * Fibers’ color (B, G, R)
  * @type {number[]}
  */
  ColorValues: number[]

  /**
  * Expected fibers number
  * @type {number}
  */
  ExpectedCount: number
}

/**
* Structure serves for storing the result of checking of one fluorescent fibers
* type for UV light image. When there is no error.
*/
export class FibersType implements iFibersType {
  /**
  * Type of the performed check
  * @type {eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND}
  */
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.UV_FIBERS])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.UV_FIBERS

  /**
  * Element responsible for the results of the checks
  * @type {eCheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckResult)
  @Default(eCheckResult.WAS_NOT_DONE)
  ElementResult: eCheckResult

  /**
  * Element with which errors are checked
  * @type {eCheckDiagnose}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eCheckDiagnose)
  @Default(eCheckDiagnose.UNKNOWN)
  ElementDiagnose: eCheckDiagnose

  /**
  * Number of RectArray, Width, Length, Area items
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RectCount: number

  /**
  * Coordinates of located areas for defined fibers type
  * @type {Rect[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Rect)
  @Default([])
  RectArray: Rect[]

  /**
  * Fibers’ width value for RectArray areas (in pixels)
  * @type {number[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  @Default([])
  Width: number[]

  /**
  * Fibers’ length value for RectArray areas (in pixels)
  * @type {number[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  @Default([])
  Length: number[]

  /**
  * Fibers’ area value for RectArray areas (in pixels)
  * @type {number[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  @Default([])
  Area: number[]

  /**
  * Fibers’ color (B, G, R)
  * @type {number[]}
  */
  @Expose()
  @IsDefined()
  @IsArray()
  @ArrayMaxSize(3)
  @ArrayMinSize(3)
  @IsInt({ each: true })
  ColorValues: number[]

  /**
  * Expected fibers number
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  ExpectedCount: number

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
    const errors = validateSync(input)

    if (errors.length) {
      throw new DocReaderTypeError('FibersTypeElement validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
