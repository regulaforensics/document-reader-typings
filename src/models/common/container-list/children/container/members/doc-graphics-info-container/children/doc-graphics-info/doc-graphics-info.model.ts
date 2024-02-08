import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { uDocGraphicField, iuDocGraphicField } from './children'
import { Default } from '@/decorators'


/**
* Model serves for storing graphic results of document filling area and bar-codes reading
*/
export interface iDocGraphicsInfo {
  /**
  * Array of images
  * @type {iuDocGraphicField[]}
  */
  pArrayFields: iuDocGraphicField[]

  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  nFields: number
}

/**
* Model serves for storing graphic results of document filling area
* and bar-codes reading
*/
export class DocGraphicsInfo implements iDocGraphicsInfo {
  /**
  * Array of images
  * @type {uDocGraphicField[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uDocGraphicField.transformList(obj.pArrayFields), { toClassOnly: true })
  @IsArray()
  @Default([])
  pArrayFields: uDocGraphicField[]

  /**
  * Number of pArrayFields array elements
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  nFields: number
}
