import { IsDefined, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { eLights } from '@/consts'
import { Rect } from '@/models'

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
   * @type {Rect[]}
   */
  rect: Rect[]
}

/**
 * Location
 */
export class RLocation implements iRLocation {
  /**
   * Light
   * @type {eLights}
   */
  @IsOptional()
  @IsEnum(eLights)
  light?: eLights

  /**
   * Rect
   * @type {Rect}
   */
  @IsDefined()
  @Type(() => Rect)
  @ValidateNested({ each: true })
  rect: Rect[]
}
