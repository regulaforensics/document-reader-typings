import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eLights } from '@/consts'
import { iRRect, RRect } from '@/common-models'


/**
* Location
*/
export interface iRLocation {
  /**
  * Light
  * @type {eLights}
  */
  light?: eLights

  /**
  * Rect
  * @type {RRect[]}
  */
  rect: iRRect[]
}

/**
* Location
*/
export class RLocation implements iRLocation {
  /**
  * Light
  * @type {eLights}
  */
  @Expose()
  @IsOptional()
  @IsEnum(eLights)
  light?: eLights

  /**
  * Rect
  * @type {RRect}
  */
  @Expose()
  @IsDefined()
  @Type(() => RRect)
  @ValidateNested({ each: true })
  rect: RRect[]
}
