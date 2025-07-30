import { IsArray, IsDefined, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator'
import { RfidDataFile as cRfidDataFile } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eGraphicFieldType, eRfidDataFileType, eRfidErrorCodes, eVisualFieldType } from '@/consts'
import { RfidParsedData, TrfFtBytes, RfidSecurityObjectCertificates } from '@/models'

/**
 * Structure is used to describe the contents of a single file of the LDS of electronic document and the analysis
 * of its contents within the context of the communication session with electronic document
 */
export class RfidDataFile implements cRfidDataFile {
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
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  ReadingTime?: number

  /**
   * Result of the data integrity verification within the context of PA
   * @type {eRfidErrorCodes}
   */
  @IsOptional()
  @IsEnum(eRfidErrorCodes)
  PA_Status?: eRfidErrorCodes

  /**
   * List of remarks arisen when reading data from the memory of
   * the chip and analysing their ASN.1-structure.
   * @type {number[]}
   */
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  Notifications?: number[]

  /**
   * List of document text fields formed on the basis of the file contents
   * @type {eVisualFieldType[]}
   */
  @IsOptional()
  @IsEnum(eVisualFieldType, { each: true })
  DocFields_Text?: eVisualFieldType[]

  /**
   * List of document graphic fields formed on the basis of the file contents
   * @type {eGraphicFieldType[]}
   */
  @IsOptional()
  @IsEnum(eGraphicFieldType, { each: true })
  DocFields_Graphics?: eGraphicFieldType[]

  /**
   * List of the original binary representation of graphic document
   * fields formed on the basis of the file contents
   * @type {eGraphicFieldType[]}
   */
  @IsOptional()
  @IsEnum(eGraphicFieldType, { each: true })
  DocFields_Originals?: eGraphicFieldType[]

  /**
   * @type {RfidParsedData}
   */
  @IsOptional()
  @Type(() => RfidParsedData)
  @ValidateNested()
  ParsedData?: RfidParsedData

  /**
   * @type {RfidSecurityObjectCertificates}
   */
  @IsOptional()
  @Type(() => RfidSecurityObjectCertificates)
  @ValidateNested()
  SecurityObject_Certificates?: RfidSecurityObjectCertificates
}
