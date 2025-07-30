import { IsArray, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { BinaryData as cBinaryData } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eRfidDataFileType } from '@/consts'
import { RfidDG1, RfidSession } from './children'
import { DetailsRFID } from '@/models'

/**
 * Structure is used for storing the results of one bar-code module reading.
 */
export class BinaryData implements cBinaryData {
  /**
   * Structure used to store the contents of Authentication_Info
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_Authentication_Info?: Record<string, any>

  /**
   * Structure used to store the contents of MIFARE_Data_Validity
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_MIFARE_Data_Validity?: Record<string, any>

  /**
   * Structure used to store the contents of MIFARE_Data
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_MIFARE_Data?: Record<string, any>

  /**
   * Structure used to store the contents of EF_COM
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_EF_COM?: Record<string, any>

  /**
   * Structure used to store the contents of EF.DG1 informational data group of
   * ePassport application – document MRZ data
   * @type {RfidDG1}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidDG1)
  RFID_DG1?: RfidDG1

  /**
   * Structure used to store the contents of DG2
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG2?: Record<string, any>

  /**
   * Structure used to store the contents of DG3
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG3?: Record<string, any>

  /**
   * Structure used to store the contents of DG4
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG4?: Record<string, any>

  /**
   * Structure used to store the contents of DG5
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG5?: Record<string, any>

  /**
   * Structure used to store the contents of DG6
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG6?: Record<string, any>

  /**
   * Structure used to store the contents of DG7
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG7?: Record<string, any>

  /**
   * Structure used to store the contents of DG8
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG8?: Record<string, any>

  /**
   * Structure used to store the contents of DG9
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG9?: Record<string, any>

  /**
   * Structure used to store the contents of DG10
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG10?: Record<string, any>

  /**
   * Structure used to store the contents of DG11
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG11?: Record<string, any>

  /**
   * Structure used to store the contents of DG12
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG12?: Record<string, any>

  /**
   * Structure used to store the contents of DG13
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG13?: Record<string, any>

  /**
   * Structure used to store the contents of DG14
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG14?: Record<string, any>

  /**
   * Structure used to store the contents of DG15
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG15?: Record<string, any>

  /**
   * Structure used to store the contents of DG16
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_DG16?: Record<string, any>

  /**
   * Structure used to store the contents of EF_SOD
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  RFID_EF_SOD?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG1
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG1?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG2
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG2?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG3?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG4
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG4?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG5
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG5?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG6
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG6?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG7
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG7?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG8
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG8?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG9
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG9?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG10
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG10?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG11
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG11?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG12
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG12?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG13?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG14
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG14?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG15
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG15?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG16
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG16?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG17
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG17?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG18
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG18?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG19
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG19?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG20
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG20?: Record<string, any>

  /**
   * Structure used to store the contents of eID_DG21
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eID_DG21?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_COM
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_COM?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_SOD
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_SOD?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG1
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG1?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG2
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG2?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG3
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG3?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG4
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG4?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG5
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG5?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG6
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG6?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG7
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG7?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG8
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG8?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG9
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG9?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG10
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG10?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG11
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG11?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG12
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG12?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG13
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG13?: Record<string, any>

  /**
   * Structure used to store the contents of eDL_DG14
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  eDL_DG14?: Record<string, any>

  /**
   * Structure used to store the contents of Visible_Digital_Seal
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  Visible_Digital_Seal?: Record<string, any>

  /**
   * Structure used to store the contents of Visible_Digital_Seal_NC
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  Visible_Digital_Seal_NC?: Record<string, any>

  /**
   * Structure used to store the contents of Digital_Signature
   * @type {Record<string, any>|undefined}
   */
  @IsOptional()
  Digital_Signature?: Record<string, any>

  /**
   * Structure is used to describe the results of work with the SDK within the context of the current communication
   * session with electronic document
   * @type {RfidSession|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidSession)
  RFID_Session_Data?: RfidSession

  /**
   * RFID session status
   * @type {DetailsRFID|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DetailsRFID)
  RFID_Session_Data_Status?: DetailsRFID

  /**
   * Indexes of groups that aren't read
   * @type {eRfidDataFileType[]|undefined}
   */
  @IsOptional()
  @IsArray()
  @IsEnum(eRfidDataFileType, { each: true })
  RFID_ePassp_Directory?: eRfidDataFileType[]
}
