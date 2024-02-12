import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eRfidApplicationType, eRfidErrorCodes } from '@/consts'
import { Default } from '@/decorators'
import { iRfidDataFile, RfidDataFile } from './children'

/**
* Structure is used to describe the contents of a single LDS application and their analysis within the context
* of the communication session with electronic document
*/
export interface iRfidApplication {
  /**
  * Type of application of electronic document
  * @type {eRfidApplicationType}
  */
  Type: eRfidApplicationType

  /**
  * Status of the application selection procedure
  * @type {eRfidErrorCodes}
  */
  Status: eRfidErrorCodes

  /**
  * Application identifier
  * @type {string}
  */
  ApplicationID: string

  /**
  * Version of the application
  * @type {string}
  */
  Version: string

  /**
  * Unicode version for application
  * @type {string}
  */
  UnicodeVersion: string

  /**
  * Algorithm for calculating hash values for files for the procedure of PA
  * @type {string}
  */
  DataHashAlgorithm: string

  /**
  * List of containers to store information about the read files of the application
  * @type {iRfidDataFile[]}
  */
  Files: iRfidDataFile[]
}

/**
* Structure is used to describe the contents of a single LDS application and their analysis within the context
* of the communication session with electronic document
*/
export class RfidApplication implements iRfidApplication {
  /**
  * Type of application of electronic document
  * @type {eRfidApplicationType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidApplicationType)
  @Default(eRfidApplicationType.UNSPECIFIED)
  Type: eRfidApplicationType

  /**
  * Status of the application selection procedure
  * @type {eRfidErrorCodes}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  @Default(eRfidErrorCodes.ERROR_NOT_PERFORMED)
  Status: eRfidErrorCodes

  /**
  * Application identifier
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  ApplicationID: string

  /**
  * Version of the application
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  Version: string

  /**
  * Unicode version for application
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  UnicodeVersion: string

  /**
  * Algorithm for calculating hash values for files for the procedure of PA
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  DataHashAlgorithm: string

  /**
  * List of containers to store information about the read files of the application
  * @type {RfidDataFile[]}
  */
  @Expose()
  @IsDefined()
  @Type(() => RfidDataFile)
  @ValidateNested({ each: true })
  @Default([])
  Files: RfidDataFile[]
}
