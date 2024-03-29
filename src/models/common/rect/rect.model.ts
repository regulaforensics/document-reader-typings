import { IsDefined, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* Rectangle coordinates
*/
export interface iRect {
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

/**
* Rectangle coordinates
*/
export class Rect implements iRect {
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
