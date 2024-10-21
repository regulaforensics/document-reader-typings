import { IsDefined, IsNumber, IsOptional } from 'class-validator'

import { Default } from '@/decorators'


/**
* Point coordinates
*/
export interface iPoint {
  /**
  * X coordinate
  * @type {number}
  */
  x: number

  /**
  * Y coordinate
  * @type {number}
  */
  y: number
}

/**
* Point coordinates
*/
export class Point implements iPoint {
  /**
  * X coordinate
  * @param {number} [x=0]
  */
  @IsDefined()
  @IsNumber()
  @Default(0)
  x: number

  /**
  * Y coordinate
  * @param {number} [y=0]
  */
  @IsOptional()
  @IsNumber()
  @Default(0)
  y: number
}
