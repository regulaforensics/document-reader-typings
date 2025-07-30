import { IsDefined, IsNumber } from 'class-validator'
import { RfidOrigin as cRfidOrigin } from '@regulaforensics/document-reader-webclient'

/**
 * Structure is used for electronic document data source description
 */
export class RfidOrigin implements cRfidOrigin {
  /**
   * Data group number
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  dg: number

  /**
   * Data group tag number
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  dgTag: number

  /**
   * Tag entry
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  tagEntry: number

  /**
   * Entry view
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  entryView: number
}
