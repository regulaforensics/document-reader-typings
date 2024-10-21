import { IsArray, IsEnum, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { eRfidDataFileType } from '@/consts'
import { iRfidDG1, iRfidSession, RfidDG1, RfidSession } from './children'
import { DetailsRFID } from '@/models';


/**
* Structure is used for storing the results of one bar-code module reading.
*/
export interface iBinaryData {
  /**
   * Structure used to store the contents of Authentication_Info
   * @type {Record<string, unknown>|undefined}
   */
  RFID_Authentication_Info?: Record<string, unknown>

  /**
   * Structure used to store the contents of MIFARE_Data_Validity
   * @type {Record<string, unknown>|undefined}
   */
  RFID_MIFARE_Data_Validity?: Record<string, unknown>

  /**
   * Structure used to store the contents of MIFARE_Data
   * @type {Record<string, unknown>|undefined}
   */
  RFID_MIFARE_Data?: Record<string, unknown>

  /**
   * Structure used to store the contents of EF_COM
   * @type {Record<string, unknown>|undefined}
   */
  RFID_EF_COM?: Record<string, unknown>

  /**
  * Structure used to store the contents of EF.DG1 informational data group of
  * ePassport application – document MRZ data
  * @type {iRfidDG1}
  */
  RFID_DG1?: iRfidDG1

  /**
   * Structure used to store the contents of DG2
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG3
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG4
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG5
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG6
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG7
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG8
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG9
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG10
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG11
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG12
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG13
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG14
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG15
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG15?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG16
   * @type {Record<string, unknown>|undefined}
   */
  RFID_DG16?: Record<string, unknown>

  /**
   * Structure used to store the contents of EF_SOD
   * @type {Record<string, unknown>|undefined}
   */
  RFID_EF_SOD?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG1
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG1?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG2
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG4
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG5
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG6
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG7
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG8
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG9
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG10
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG11
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG12
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG14
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG15
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG15?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG16
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG16?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG17
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG17?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG18
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG18?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG19
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG19?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG20
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG20?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG21
   * @type {Record<string, unknown>|undefined}
   */
  eID_DG21?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_COM
   * @type {Record<string, unknown>|undefined}
   */
  eDL_COM?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_SOD
   * @type {Record<string, unknown>|undefined}
   */
  eDL_SOD?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG1
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG1?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG2
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG3
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG4
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG5
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG6
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG7
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG8
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG9
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG10
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG11
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG12
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG13
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG14
   * @type {Record<string, unknown>|undefined}
   */
  eDL_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of Visible_Digital_Seal
   * @type {Record<string, unknown>|undefined}
   */
  Visible_Digital_Seal?: Record<string, unknown>

  /**
   * Structure used to store the contents of Visible_Digital_Seal_NC
   * @type {Record<string, unknown>|undefined}
   */
  Visible_Digital_Seal_NC?: Record<string, unknown>

  /**
   * Structure used to store the contents of Digital_Signature
   * @type {Record<string, unknown>|undefined}
   */
  Digital_Signature?: Record<string, unknown>

  /**
  * Structure is used to describe the results of work with the SDK within the context of the current communication
  * session with electronic document
  * @type {iRfidSession}
  */
  RFID_Session_Data?: iRfidSession

  /**
   * RFID session status
   * @type {DetailsRFID}
   */
  RFID_Session_Data_Status?: DetailsRFID

  /**
  * Indexes of groups that aren't read
  * @type {eRfidDataFileType[]|undefined}
  */
  RFID_ePassp_Directory?: eRfidDataFileType[]
}

/**
* Structure is used for storing the results of one bar-code module reading.
*/
export class BinaryData implements iBinaryData {
  /**
   * Structure used to store the contents of Authentication_Info
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_Authentication_Info?: Record<string, unknown>

  /**
   * Structure used to store the contents of MIFARE_Data_Validity
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_MIFARE_Data_Validity?: Record<string, unknown>

  /**
   * Structure used to store the contents of MIFARE_Data
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_MIFARE_Data?: Record<string, unknown>

  /**
   * Structure used to store the contents of EF_COM
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_EF_COM?: Record<string, unknown>

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
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG3
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG4
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG5
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG6
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG7
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG8
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG9
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG10
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG11
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG12
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG13
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG14
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG15
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG15?: Record<string, unknown>

  /**
   * Structure used to store the contents of DG16
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_DG16?: Record<string, unknown>

  /**
   * Structure used to store the contents of EF_SOD
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  RFID_EF_SOD?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG1
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG1?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG2
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG4
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG5
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG6
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG7
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG8
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG9
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG10
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG11
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG12
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG3
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG14
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG15
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG15?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG16
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG16?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG17
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG17?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG18
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG18?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG19
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG19?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG20
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG20?: Record<string, unknown>

  /**
   * Structure used to store the contents of eID_DG21
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eID_DG21?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_COM
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_COM?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_SOD
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_SOD?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG1
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG1?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG2
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG2?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG3
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG3?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG4
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG4?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG5
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG5?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG6
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG6?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG7
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG7?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG8
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG8?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG9
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG9?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG10
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG10?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG11
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG11?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG12
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG12?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG13
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG13?: Record<string, unknown>

  /**
   * Structure used to store the contents of eDL_DG14
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  eDL_DG14?: Record<string, unknown>

  /**
   * Structure used to store the contents of Visible_Digital_Seal
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  Visible_Digital_Seal?: Record<string, unknown>

  /**
   * Structure used to store the contents of Visible_Digital_Seal_NC
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  Visible_Digital_Seal_NC?: Record<string, unknown>

  /**
   * Structure used to store the contents of Digital_Signature
   * @type {Record<string, unknown>|undefined}
   */
  @IsOptional()
  Digital_Signature?: Record<string, unknown>

  /**
  * Structure is used to describe the results of work with the SDK within the context of the current communication
  * session with electronic document
  * @type {RfidSession}
  */
  @IsOptional()
  @ValidateNested()
  @Type(() => RfidSession)
  RFID_Session_Data?: RfidSession

  /**
   * RFID session status
   * @type {DetailsRFID}
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
