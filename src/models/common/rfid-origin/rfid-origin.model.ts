import { IsDefined, IsNumber } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IRfidOrigin {
  /**
  * Data group number
  * @type {number}
  */
  dg: number

  /**
  * Data group tag number
  * @type {number}
  */
  dgTag: number

  /**
  * Tag entry
  * @type {number}
  */
  tagEntry: number

  /**
  * Entry view
  * @type {number}
  */
  entryView: number
}

export class RfidOrigin implements IRfidOrigin {
  /**
  * Data group number
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  dg: number

  /**
  * Data group tag number
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  dgTag: number

  /**
  * Tag entry
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  tagEntry: number

  /**
  * Entry view
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  entryView: number
}
