import { IsDefined, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { iBinaryData, BinaryData } from './children'


/**
* Structure is used to store the data reading results from the RFID-chip in
* a form of a list of the logically separated data groups.
*/
export interface iDocBinaryInfo {
  /**
  * Structure is used for storing the results of one bar-code module reading.
  * @type {iBinaryData}
  */
  RFID_BINARY_DATA: iBinaryData
}

/**
* Structure is used to store the data reading results from the RFID-chip in
* a form of a list of the logically separated data groups.
*/
export class DocBinaryInfo implements iDocBinaryInfo {
  /**
  * Structure is used for storing the results of one bar-code module reading.
  * @type {BinaryData}
  */
  @IsDefined()
  @ValidateNested()
  @Type(() => BinaryData)
  RFID_BINARY_DATA: BinaryData
}
