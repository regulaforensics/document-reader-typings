import { IsBoolean, IsDefined, IsEnum, IsInt, IsNumber, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { eAuthenticity, getAuthenticityArray, getLightsArray, eLights, eRfidPresence } from '@/consts'
import { Default } from '@/decorators'
import { FDSIDList, iFDSIDList } from './children'


export interface iOneCandidate {
  /**
  * Document name
  * @type {string}
  * @memberof iOneCandidate
  */
  DocumentName: string

  /**
  * Document type numeric code
  * @type {number}
  * @memberof iOneCandidate
  */
  ID: number

  /**
  * Estimation of correct recognition probability when analyzing the given document type
  * @type {number}
  * @memberof iOneCandidate
  */
  P: number

  /**
  * true if the document of the given type is rotated by 180 degrees
  * @type {boolean}
  * @memberof iOneCandidate
  */
  Rotated180: boolean

  /**
  * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
  * @type {number}
  * @memberof iOneCandidate
  */
  NecessaryLights: number

  /**
  * Presence of RFID-chip in the document
  * @type {eRfidPresence}
  * @memberof iOneCandidate
  */
  RFID_Presence: eRfidPresence

  /**
  * Set of authenticity check options provided for the given document type
  * @type {number}
  * @memberof iOneCandidate
  */
  CheckAuthenticity: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
  * @type {number}
  * @memberof iOneCandidate
  */
  UVExp: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
  * @type {number}
  * @memberof iOneCandidate
  */
  OVIExp: number

  /**
  * Combination of identifiers of necessary lighting schemes
  * @see {eLights} to perform authenticity check for the
  * given document type
  * @type {number}
  * @memberof iOneCandidate
  */
  AuthenticityNecessaryLights: number

  /**
  * Pointer to TFDSIDList structure containing additional
  * document information and its link to IRS
  * @type {iFDSIDList}
  * @memberof iOneCandidate
  */
  FDSIDList: iFDSIDList
}

export class OneCandidate implements iOneCandidate {
  /**
  * Document name
  * @type {string}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsString()
  DocumentName: string

  /**
  * Document type numeric code
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsInt()
  ID: number

  /**
  * Estimation of correct recognition probability when analyzing the given document type
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  P: number

  /**
  * true if the document of the given type is rotated by 180 degrees
  * @type {boolean}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsBoolean()
  @Default(false)
  Rotated180: boolean

  /**
  * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  NecessaryLights: number

  /**
  * Presence of RFID-chip in the document
  * @type {eRfidPresence}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidPresence)
  @Default(eRfidPresence.NONE)
  RFID_Presence: eRfidPresence

  /**
  * Set of authenticity check options provided for the given document type
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  CheckAuthenticity: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  UVExp: number

  /**
  * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  OVIExp: number

  /**
  * Combination of identifiers of necessary lighting schemes
  * @see {eLights} to perform authenticity check for the
  * given document type
  * @type {number}
  * @memberof OneCandidate
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  AuthenticityNecessaryLights: number

  /**
  * Pointer to TFDSIDList structure containing additional
  * document information and its link to IRS
  * @type {FDSIDList}
  * @memberof OneCandidate
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
  * @returns {eLights[]} - array of Lights
  */
  static getNecessaryLights = (instance: OneCandidate | number): eLights[] => {
    if (typeof instance === 'number') {
      return getLightsArray(instance)
    }

    return getLightsArray(instance.NecessaryLights)
  }

  /**
  * Get authenticity
  *
  * @param {OneCandidate | number} instance - instance of OneCandidate or number
  * @returns {eAuthenticity[]} - array of Authenticity
  */
  static getCheckAuthenticity = (instance: OneCandidate | number): eAuthenticity[] => {
    if (typeof instance === 'number') {
      return getAuthenticityArray(instance)
    }

    return getAuthenticityArray(instance.CheckAuthenticity)
  }

  /**
  * Get authenticity necessary lights
  *
  * @param {OneCandidate | number} instance - instance of OneCandidate or number
  * @returns {eLights[]} - array of Lights
  */
  static getAuthenticityNecessaryLights = (instance: OneCandidate | number): eLights[] => {
    if (typeof instance === 'number') {
      return getLightsArray(instance)
    }

    return getLightsArray(instance.AuthenticityNecessaryLights)
  }
}
