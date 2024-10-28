import { IsDefined, IsEnum, IsIn, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import {
  eGraphicFieldType,
  eLDSParsingErrorCodes,
  eRfidDataFileType,
  eRfidErrorCodes,
  eVisualFieldType
} from '@/consts'
import { Default } from '@/decorators'
import { iTrfFtBytes, TrfFtBytes } from '@/models'

/**
* Structure is used to describe the contents of a single file of the LDS of electronic document and the analysis
* of its contents within the context of the communication session with electronic document
*/
export interface iRfidDataFile {
  /**
  * File identifier.
  * Each byte of FileID represented by its hexadecimal value. The individual bytes are separated by spaces (e.g. "01 1E")
  * @type {string|undefined}
  */
  FileID?: string

  /**
  * Type of the file (of the object) of data
  * @type {eRfidDataFileType}
  */
  Type: eRfidDataFileType

  /**
  * Binary data of the file
  * @type {iTrfFtBytes|undefined}
  */
  FileData?: iTrfFtBytes

  /**
  * Status of the physical file reading
  * @type {eRfidErrorCodes}
  */
  ReadingStatus: eRfidErrorCodes

  /**
  * Time of reading, milliseconds
  * @type {number}
  */
  ReadingTime: number

  /**
  * Result of the data integrity verification within the context of PA
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_FAILED}
  */
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_FAILED

  /**
  * List of remarks arisen when reading data from the memory of
  * the chip and analysing their ASN.1-structure.
  * @type {eLDSParsingErrorCodes[]}
  */
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of document text fields formed on the basis of the file contents
  * @type {eVisualFieldType[]}
  */
  DocFields_Text: eVisualFieldType[]

  /**
  * List of document graphic fields formed on the basis of the file contents
  * @type {eGraphicFieldType[]}
  */
  DocFields_Graphics: eGraphicFieldType[]

  /**
  * List of the original binary representation of graphic document
  * fields formed on the basis of the file contents
  * @type {eGraphicFieldType[]}
  */
  DocFields_Originals: eGraphicFieldType[]
}

/**
* Structure is used to describe the contents of a single file of the LDS of electronic document and the analysis
* of its contents within the context of the communication session with electronic document
*/
export class RfidDataFile implements iRfidDataFile {
  /**
  * File identifier.
  * Each byte of FileID represented by its hexadecimal value. The individual bytes are separated by spaces (e.g. "01 1E")
  * @type {string|undefined}
  */
  @IsString()
  @IsOptional()
  FileID?: string

  /**
  * Type of the file (of the object) of data
  * @type {eRfidDataFileType}
  */
  @IsDefined()
  @IsEnum(eRfidDataFileType)
  Type: eRfidDataFileType

  /**
  * Binary data of the file
  * @type {TrfFtBytes|undefined}
  */
  @IsOptional()
  @Type(() => TrfFtBytes)
  @ValidateNested()
  FileData?: TrfFtBytes

  /**
  * Status of the physical file reading
  * @type {eRfidErrorCodes}
  */
  @IsDefined()
  @IsEnum(eRfidErrorCodes)
  ReadingStatus: eRfidErrorCodes

  /**
  * Time of reading, milliseconds
  * @type {number}
  */
  @IsDefined()
  @IsInt()
  @Default(0)
  ReadingTime: number

  /**
  * Result of the data integrity verification within the context of PA
  * @type {eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_FAILED}
  */
  @IsDefined()
  @IsIn([
    eRfidErrorCodes.ERROR_NOT_PERFORMED,
    eRfidErrorCodes.ERROR_NOT_AVAILABLE,
    eRfidErrorCodes.ERROR_NO_ERROR,
    eRfidErrorCodes.ERROR_FAILED
  ])
  @Default(eRfidErrorCodes.ERROR_NOT_PERFORMED)
  PA_Status: eRfidErrorCodes.ERROR_NOT_PERFORMED | eRfidErrorCodes.ERROR_NOT_AVAILABLE | eRfidErrorCodes.ERROR_NO_ERROR | eRfidErrorCodes.ERROR_FAILED

  /**
  * List of remarks arisen when reading data from the memory of
  * the chip and analysing their ASN.1-structure.
  * @type {eLDSParsingErrorCodes[]}
  */
  @IsDefined()
  @IsEnum(eLDSParsingErrorCodes, { each: true })
  @Default([])
  Notifications: eLDSParsingErrorCodes[]

  /**
  * List of document text fields formed on the basis of the file contents
  * @type {eVisualFieldType[]}
  */
  @IsDefined()
  @IsEnum(eVisualFieldType, { each: true })
  @Default([])
  DocFields_Text: eVisualFieldType[]

  /**
  * List of document graphic fields formed on the basis of the file contents
  * @type {eGraphicFieldType[]}
  */
  @IsDefined()
  @IsEnum(eGraphicFieldType, { each: true })
  @Default([])
  DocFields_Graphics: eGraphicFieldType[]

  /**
  * List of the original binary representation of graphic document
  * fields formed on the basis of the file contents
  * @type {eGraphicFieldType[]}
  */
  @IsDefined()
  @IsEnum(eGraphicFieldType, { each: true })
  @Default([])
  DocFields_Originals: eGraphicFieldType[]
}
