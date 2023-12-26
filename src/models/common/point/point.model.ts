import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { Default } from '@/decorators'


export interface IPoint {
  /**
  * X coordinate
  */
  x: number

  /**
  * Y coordinate
  */
  y: number
}

export class Point implements IPoint {
  /**
  * X coordinate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  @Default(0)
  x: number

  /**
  * Y coordinate
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  @Default(0)
  y: number
}
