import { IsDefined, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iRectangleCoordinates {
  /**
  * Left
  * @type {number}
  */
  left: number

  /**
  * Top
  * @type {number}
  */
  top: number

  /**
  * Right
  * @type {number}
  */
  right: number

  /**
  * Bottom
  * @type {number}
  */
  bottom: number
}

export class RectangleCoordinates implements iRectangleCoordinates {
  /**
  * Left
  * @param {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  left: number

  /**
  * Top
  * @param {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  top: number

  /**
  * Right
  * @param {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  right: number

  /**
  * Bottom
  * @param {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  bottom: number
}
