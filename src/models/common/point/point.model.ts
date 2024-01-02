import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { Default } from '@/decorators'


export interface IPoint {
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

export class Point implements IPoint {
  /**
  * X coordinate
  * @param {number} [x=0]
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  x: number

  /**
  * Y coordinate
  * @param {number} [y=0]
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  y: number
}
