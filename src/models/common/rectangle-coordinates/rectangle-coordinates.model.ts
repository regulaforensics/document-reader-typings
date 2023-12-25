import { IsDefined, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IRectangleCoordinates {
  /**
  * Left
  */
  left: number

  /**
  * Top
  */
  top: number

  /**
  * Right
  */
  right: number

  /**
  * Bottom
  */
  bottom: number
}

export class RectangleCoordinates implements IRectangleCoordinates {
  /**
  * Left
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  left: number

  /**
  * Top
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  top: number

  /**
  * Right
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  right: number

  /**
  * Bottom
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  bottom: number
}
