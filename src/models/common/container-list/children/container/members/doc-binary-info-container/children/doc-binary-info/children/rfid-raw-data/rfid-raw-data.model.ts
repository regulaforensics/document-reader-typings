import { IsDefined, IsNumber, IsString } from 'class-validator'
import { RfidRawData as cRfidRawData } from '@regulaforensics/document-reader-webclient'

/**
 * RFID raw data
 */
export class RfidRawData implements cRfidRawData {
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

export type { RfidRawData as iRfidRawData }
