import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iTrfFtString, TrfFtString } from '@/models/common/trf-ft-string'

/**
* Structure contains information on a certificate validity.
*/
export interface iRfidValidity {
  /**
  * String of the start date.
  * Format can be YYMMDDHHMMSSZ (in the case of using UTCTime format)
  * or YYYYMMDDHHMMSSZ (in the case of GeneralizedTime format).
  * @type {iTrfFtString}
  */
  NotBefore: iTrfFtString

  /**
  * String of the expiration date.
  * Format can be YYMMDDHHMMSSZ (in the case of using UTCTime format)
  * or YYYYMMDDHHMMSSZ (in the case of GeneralizedTime format).
  * @type {iTrfFtString}
  */
  NotAfter: iTrfFtString
}

/**
* Structure contains information on a certificate validity.
*/
export class RfidValidity implements iRfidValidity {
  /**
  * String of the start date.
  * Format can be YYMMDDHHMMSSZ (in the case of using UTCTime format)
  * or YYYYMMDDHHMMSSZ (in the case of GeneralizedTime format).
  * @type {TrfFtString}
  */
  @Expose()
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
  @Expose()
  @IsDefined()
  @Type(() => TrfFtString)
  @ValidateNested()
  NotAfter: TrfFtString
}
