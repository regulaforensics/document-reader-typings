import { IsDefined, IsEnum } from 'class-validator'
import { Expose } from 'class-transformer'

import { CheckResult } from 'consts'


/**
* Interface for DetailsRFID model.
* The summary of all RFID checks.
*/
export interface IDetailsRFID {
  /**
  * The summary of all RFID checks.
  * @type {CheckResult}
  */
  overallStatus: CheckResult

  /**
  * The Active Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#active-authentication}
  * @type {CheckResult}
  */
  AA: CheckResult

  /**
  * The Basic Access Control status
  * @type {CheckResult}
  */
  BAC: CheckResult

  /**
  * The Chip Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#chip-authentication}
  * @type {CheckResult}
  */
  CA: CheckResult

  /**
  * The Passive Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#passive-authentication}
  * @type {CheckResult}
  */
  PA: CheckResult

  /**
  * The Password Authenticated Connection Establishment status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#password-authenticated-connection-establishment}
  * @type {CheckResult}
  */
  PACE: CheckResult

  /**
  * The Terminal Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#terminal-authentication}
  * @type {CheckResult}
  */
  TA: CheckResult
}

/**
* The summary of all RFID checks.
*/
export class DetailsRFID implements IDetailsRFID {
  /**
  * The summary of all RFID checks.
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  overallStatus: CheckResult

  /**
  * The Active Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#active-authentication}
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  AA: CheckResult

  /**
  * The Basic Access Control status
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  BAC: CheckResult

  /**
  * The Chip Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#chip-authentication}
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  CA: CheckResult

  /**
  * The Passive Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#passive-authentication}
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  PA: CheckResult

  /**
  * The Password Authenticated Connection Establishment status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#password-authenticated-connection-establishment}
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  PACE: CheckResult

  /**
  * The Terminal Authentication status.
  * @see {@link https://docs.regulaforensics.com/develop/doc-reader-sdk/overview/security-mechanisms-for-electronic-documents/#terminal-authentication}
  * @type {CheckResult}
  */
  @Expose()
  @IsDefined()
  @IsEnum(CheckResult)
  TA: CheckResult
}
