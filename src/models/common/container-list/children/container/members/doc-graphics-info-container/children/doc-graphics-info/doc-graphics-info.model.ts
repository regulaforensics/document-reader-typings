/**
* Model serves for storing graphic results of document filling area
* and bar-codes reading
*/
import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { uDocGraphicField, iuDocGraphicField } from './children'


export interface iDocGraphicsInfo {
  /**
  * Array of images
  * @type {iuDocGraphicField[]}
  * @memberof iDocGraphicsInfo
  */
  pArrayFields: iuDocGraphicField[]
}

export class DocGraphicsInfo implements iDocGraphicsInfo {
  /**
  * Array of images
  * @type {uDocGraphicField[]}
  * @memberof DocGraphicsInfo
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uDocGraphicField.transformList(obj.pArrayFields), { toClassOnly: true })
  pArrayFields: uDocGraphicField[]
}
