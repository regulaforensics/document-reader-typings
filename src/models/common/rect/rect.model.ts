import { IsDefined, IsNumber } from 'class-validator'


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
  @IsDefined()
  @IsNumber()
  left: number

  /**
  * Top
  * @param {number}
  */
  @IsDefined()
  @IsNumber()
  top: number

  /**
  * Right
  * @param {number}
  */
  @IsDefined()
  @IsNumber()
  right: number

  /**
  * Bottom
  * @param {number}
  */
  @IsDefined()
  @IsNumber()
  bottom: number
}
