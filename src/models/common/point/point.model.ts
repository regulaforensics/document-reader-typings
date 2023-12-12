import { IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IPoint {
  x?: number
  y?: number
}

export class Point implements IPoint {
  @Expose()
  @IsOptional()
  @IsNumber()
  x?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  y?: number
}
