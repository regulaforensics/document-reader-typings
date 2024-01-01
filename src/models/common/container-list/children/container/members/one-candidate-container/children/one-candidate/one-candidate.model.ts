import { IsBoolean, IsDefined, IsEnum, IsInt, IsNumber, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { Authenticity, getAuthenticityArray, getLightsArray, Lights, RfidPresence } from '@/consts'
import { Default } from '@/decorators'
import { FDSIDList, IFDSIDList } from './children'


export interface IOneCandidate {
  /**
  * Document name
  * @type {string}
  */
  DocumentName: string

  /**
  * Document type numeric code
  * @type {number}
  */
  ID: number

  /**
  * Estimation of correct recognition probability when analyzing the given document type
  * @type {number}
  */
  P: number

  /**
  * true if the document of the given type is rotated by 180 degrees
  * @type {boolean}
  */
  Rotated180: boolean

  /**
  * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
  * @type {number}
  */
  NecessaryLights: number

  /**
  * Presence of RFID-chip in the document
  * @type {RfidPresence}
  */
  RFID_Presence: RfidPresence

  /**
  * Set of authenticity check options provided for the given document type
  * @type {number}
  */
  CheckAuthenticity: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
  * @type {number}
  */
  UVExp: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
  * @type {number}
  */
  OVIExp: number

  /**
  * Combination of identifiers of necessary lighting schemes
  * @see {Lights} to perform authenticity check for the
  * given document type
  * @type {number}
  */
  AuthenticityNecessaryLights: number

  /**
  * Pointer to TFDSIDList structure containing additional
  * document information and its link to IRS
  * @type {IFDSIDList}
  */
  FDSIDList: IFDSIDList
}

export class OneCandidate implements IOneCandidate {
  /**
  * Document name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  DocumentName: string

  /**
  * Document type numeric code
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  ID: number

  /**
  * Estimation of correct recognition probability when analyzing the given document type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  P: number

  /**
  * true if the document of the given type is rotated by 180 degrees
  * @type {boolean}
  */
  @Expose()
  @IsDefined()
  @IsBoolean()
  @Default(false)
  Rotated180: boolean

  /**
  * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  NecessaryLights: number

  /**
  * Presence of RFID-chip in the document
  * @type {RfidPresence}
  */
  @Expose()
  @IsDefined()
  @IsEnum(RfidPresence)
  @Default(RfidPresence.NONE)
  RFID_Presence: RfidPresence

  /**
  * Set of authenticity check options provided for the given document type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  CheckAuthenticity: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  UVExp: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  OVIExp: number

  /**
  * Combination of identifiers of necessary lighting schemes
  * @see {Lights} to perform authenticity check for the
  * given document type
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  AuthenticityNecessaryLights: number

  /**
  * Pointer to TFDSIDList structure containing additional
  * document information and its link to IRS
  * @type {FDSIDList}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => FDSIDList)
  FDSIDList: FDSIDList

  /**
  * Get necessary lights
  *
  * @param {OneCandidate | number} instance - instance of OneCandidate or number (NecessaryLights value)
  * @returns {Lights[]} - array of Lights
  */
  static getNecessaryLights = (instance: OneCandidate | number): Lights[] => {
    if (typeof instance === 'number') {
      return getLightsArray(instance)
    }

    return getLightsArray(instance.NecessaryLights)
  }

  /**
  * Get authenticity
  *
  * @param {OneCandidate | number} instance - instance of OneCandidate or number
  * @returns {Authenticity[]} - array of Authenticity
  */
  static getCheckAuthenticity = (instance: OneCandidate | number): Authenticity[] => {
    if (typeof instance === 'number') {
      return getAuthenticityArray(instance)
    }

    return getAuthenticityArray(instance.CheckAuthenticity)
  }

  /**
  * Get authenticity necessary lights
  *
  * @param {OneCandidate | number} instance - instance of OneCandidate or number
  * @returns {Lights[]} - array of Lights
  */
  static getAuthenticityNecessaryLights = (instance: OneCandidate | number): Lights[] => {
    if (typeof instance === 'number') {
      return getLightsArray(instance)
    }

    return getLightsArray(instance.AuthenticityNecessaryLights)
  }
}
