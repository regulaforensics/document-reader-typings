import { IsDefined, IsEnum } from 'class-validator'

import { eCheckResult, eRfidDataFileType } from '@/consts'


/**
* Rfid data group status item
*/
export interface iRRfidDataGroupStatusItem {
  /**
  * Data group
  * @type {eRfidDataFileType}
  */
  group: eRfidDataFileType

  /**
  * Status
  * @type {eCheckResult}
  */
  status: eCheckResult
}

/**
* Rfid data group status item
*/
export class RRfidDataGroupStatusItem implements iRRfidDataGroupStatusItem {
  /**
  * Data group
  * @type {eRfidDataFileType}
  */
  @IsDefined()
  @IsEnum(eRfidDataFileType)
  group: eRfidDataFileType

  /**
  * Status
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  status: eCheckResult
}
