import { IsDefined, ValidateNested } from 'class-validator'
import { RfidValidity as cRfidValidity } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { TrfFtString } from '@/models/common/trf-ft-string'

/**
 * Structure contains information on a certificate validity.
 */
export class RfidValidity implements cRfidValidity {
  /**
   * String of the start date.
   * Format can be YYMMDDHHMMSSZ (in the case of using UTCTime format)
   * or YYYYMMDDHHMMSSZ (in the case of GeneralizedTime format).
   * @type {TrfFtString}
   */
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  NotBefore: TrfFtString

  /**
   * String of the expiration date.
   * Format can be YYMMDDHHMMSSZ (in the case of using UTCTime format)
   * or YYYYMMDDHHMMSSZ (in the case of GeneralizedTime format).
   * @type {TrfFtString}
   */
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  NotAfter: TrfFtString
}

export type { RfidValidity as iRfidValidity }
