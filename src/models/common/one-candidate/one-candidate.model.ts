import { IsDefined, IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { OneCandidate as cOneCandidate } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { eAuthenticity, getAuthenticityArray, getLightsArray, eLights, eRfidPresence } from '@/consts'
import { FDSIDList } from './children'

/**
 * Contains information on one candidate document when determining the document type
 */
export class OneCandidate implements cOneCandidate {
  /**
   * Document name
   * @type {string}
   */
  @IsOptional()
  @IsString()
  DocumentName?: string

  /**
   * Document type numeric code
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  ID: number

  /**
   * Estimation of correct recognition probability when analyzing the given document type
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  P: number

  /**
   * true if the document of the given type is rotated by 180 degrees
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Rotated180: number

  /**
   * Presence of RFID-chip in the document
   * @type {eRfidPresence}
   */
  @IsDefined()
  @IsEnum(eRfidPresence)
  RFID_Presence: eRfidPresence

  /**
   * Pointer to TFDSIDList structure containing additional
   * document information and its link to IRS
   * @type {FDSIDList}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => FDSIDList)
  FDSIDList?: FDSIDList

  /**
   * Combination of identifiers of necessary lighting schemes to perform OCR for the given document type
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  NecessaryLights: number

  /**
   * Set of authenticity check options provided for the given document type
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CheckAuthenticity: number

  /**
   * Camera exposure value necessary when obtaining document images of the given type for UV lighting scheme
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  UVExp: number

  /**
   * Combination of identifiers of necessary lighting schemes
   * @see {eLights} to perform authenticity check for the
   * given document type
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  AuthenticityNecessaryLights: number

  /**
   * Camera exposure value necessary when obtaining document images of the given type for AXIAL lighting scheme
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  OVIExp: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  RotationAngle?: number

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

export type { OneCandidate as iOneCandidate }
