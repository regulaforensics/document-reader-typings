import { IsDefined, IsEnum } from 'class-validator'
import { DetailsRFID as cDetailsRFID } from '@regulaforensics/document-reader-webclient'

import { eCheckResult } from '@/consts'

/**
 * The summary of all RFID checks.
 */
export class DetailsRFID implements cDetailsRFID {
  /**
   * The summary of all RFID checks.
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  overallStatus: eCheckResult

  /**
   * The Active Authentication status.
   * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#active-authentication}
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  AA: eCheckResult

  /**
   * The Basic Access Control status
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  BAC: eCheckResult

  /**
   * The Chip Authentication status.
   * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#chip-authentication}
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  CA: eCheckResult

  /**
   * The Passive Authentication status.
   * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#passive-authentication}
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  PA: eCheckResult

  /**
   * The Password Authenticated Connection Establishment status.
   * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#password-authenticated-connection-establishment}
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  PACE: eCheckResult

  /**
   * The Terminal Authentication status.
   * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#terminal-authentication}
   * @type {eCheckResult}
   */
  @IsDefined()
  @IsEnum(eCheckResult)
  TA: eCheckResult
}

export type { DetailsRFID as iDetailsRFID }
