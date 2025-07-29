import { IsDefined, IsNumber, IsString } from 'class-validator'
import { RfidRawData as iRfidRawData } from '@regulaforensics/document-reader-webclient'

/**
 * RFID raw data
 */
export class RfidRawData implements iRfidRawData {
  /**
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Data: string

  /**
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  FieldType: number
}

export type { iRfidRawData }
