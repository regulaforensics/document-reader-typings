import { IsBoolean, IsDefined, IsEnum, IsString } from 'class-validator'
import { RfidAccessKey as cRfidAccessKey } from '@regulaforensics/document-reader-webclient'

import { eRfidAccessControlProcedureType, eRfidPasswordType } from '@/consts'

/**
 * Structure is used to describe the contents of secure data access key within
 * the context of the communication session with electronic document
 */
export class RfidAccessKey implements cRfidAccessKey {
  /**
   * Key contents
   * @type {string}
   */
  @IsDefined()
  @IsString()
  AccessKey: string

  /**
   * Type of the key
   * @type {eRfidPasswordType}
   */
  @IsDefined()
  @IsEnum(eRfidPasswordType)
  KeyType: eRfidPasswordType

  /**
   * Type of secure data access procedure, for which the key is provided
   * @type {eRfidAccessControlProcedureType}
   */
  @IsDefined()
  @IsEnum(eRfidAccessControlProcedureType)
  AccessType: eRfidAccessControlProcedureType

  /**
   * Logical sign of the need for a full comparison of AccessKey
   * contents with the contents of DG1 (MRZ) data group
   * @type {boolean}
   */
  @IsDefined()
  @IsBoolean()
  CheckFullKeyMatching: boolean
}

export type { RfidAccessKey as iRfidAccessKey }
