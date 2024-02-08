import { IsBoolean, IsDefined, IsEnum, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eRfidAccessControlProcedureType, eRfidPasswordType } from '@/consts'
import { Default } from '@/decorators'

/**
* Structure is used to describe the contents of secure data access key within
* the context of the communication session with electronic document
*/
export interface iRfidAccessKey {
  /**
  * Key contents
  * @type {string}
  */
  AccessKey: string

  /**
  * Type of the key
  * @type {eRfidPasswordType}
  */
  KeyType: eRfidPasswordType

  /**
  * Type of secure data access procedure, for which the key is provided
  * @type {eRfidAccessControlProcedureType}
  */
  AccessType: eRfidAccessControlProcedureType

  /**
  * Logical sign of the need for a full comparison of AccessKey
  * contents with the contents of DG1 (MRZ) data group
  * @type {boolean}
  */
  CheckFullKeyMatching: boolean
}

/**
* Structure is used to describe the contents of secure data access key within
* the context of the communication session with electronic document
*/
export class RfidAccessKey implements iRfidAccessKey {
  /**
  * Key contents
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  AccessKey: string

  /**
  * Type of the key
  * @type {eRfidPasswordType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidPasswordType)
  @Default(eRfidPasswordType.UNKNOWN)
  KeyType: eRfidPasswordType

  /**
  * Type of secure data access procedure, for which the key is provided
  * @type {eRfidAccessControlProcedureType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidAccessControlProcedureType)
  @Default(eRfidAccessControlProcedureType.UNDEFINED)
  AccessType: eRfidAccessControlProcedureType

  /**
  * Logical sign of the need for a full comparison of AccessKey
  * contents with the contents of DG1 (MRZ) data group
  * @type {boolean}
  */
  @Expose()
  @IsDefined()
  @IsBoolean()
  CheckFullKeyMatching: boolean
}
