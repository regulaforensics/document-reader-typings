import { IsDefined, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IRectangleCoordinates {
  left: number
  top: number
  right: number
  bottom: number
}

export class RectangleCoordinates implements IRectangleCoordinates {
  @Expose()
  @IsDefined()
  @IsNumber()
  left: number

  @Expose()
  @IsDefined()
  @IsNumber()
  top: number

  @Expose()
  @IsDefined()
  @IsNumber()
  right: number

  @Expose()
  @IsDefined()
  @IsNumber()
  bottom: number
}
