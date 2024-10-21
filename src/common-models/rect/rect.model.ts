import { IsDefined, IsNumber } from 'class-validator'


/**
* Rectangle coordinates
*/
export interface iRRect {
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
export class RRect implements iRRect {
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
