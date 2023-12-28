/**
* Model serves for storing graphic results of document filling area
* and bar-codes reading
*/
import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Transform } from 'class-transformer'

import { DocGraphicFieldUnion, IDocGraphicFieldUnion } from './children'


export interface IDocGraphicsInfo {
  /**
  * Array of images
  * @type {IDocGraphicFieldUnion[]}
  */
  pArrayFields: IDocGraphicFieldUnion[]
}

export class DocGraphicsInfo implements IDocGraphicsInfo {
  /**
  * Array of images
  * @type {DocGraphicFieldUnion[]}
  */
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Transform(({ obj }) => DocGraphicFieldUnion.transformList(obj.pArrayFields), { toClassOnly: true })
  pArrayFields: DocGraphicFieldUnion[]
}
