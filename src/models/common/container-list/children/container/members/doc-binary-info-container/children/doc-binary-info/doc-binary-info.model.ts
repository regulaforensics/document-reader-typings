import { IsOptional, ValidateNested } from 'class-validator'
import { TDocBinaryInfo as iDocBinaryInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { BinaryData, RfidRawData } from './children'

/**
 * Structure is used to store the data reading results from the RFID-chip in
 * a form of a list of the logically separated data groups.
 */
export class DocBinaryInfo implements iDocBinaryInfo {
  /**
   * Structure is used for storing the results of one bar-code module reading.
   * @type {BinaryData}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => BinaryData)
  RFID_BINARY_DATA?: BinaryData

  /**
   * Structure is used for storing the results of one bar-code module reading.
   * @type {RfidRawData[]}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidRawData)
  RFID_RAW_DATA?: RfidRawData[]
}

export type { iDocBinaryInfo }
