import { IsBoolean, IsOptional } from 'class-validator'
import { LivenessParams as iLivenessParams } from '@regulaforensics/document-reader-webclient'

/**
 * Params for the RFID chip data reprocessing
 */
export class LivenessParams implements iLivenessParams {
  /**
   * This parameter is used to enable OVI check
   * Default true
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkOVI?: boolean

  /**
   * This parameter is used to enable MLI check
   * Default true
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkMLI?: boolean

  /**
   * This parameter is used to enable Hologram detection
   * Default true
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkHolo?: boolean

  /**
   * This parameter is used to enable Electronic device detection
   * Default true
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkED?: boolean

  /**
   * This parameter is used to enable Black and white copy check
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkBlackAndWhiteCopy?: boolean

  /**
   * This parameter is used to enable Dynaprint check
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkDynaprint?: boolean

  /**
   * This parameter is used to enable Geometry check
   * @type {boolean|undefined}
   */
  @IsOptional()
  @IsBoolean()
  checkGeometry?: boolean
}

export type { iLivenessParams }
