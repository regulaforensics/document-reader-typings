import { IsDefined, IsEnum, IsIn, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { eResultType } from '@/consts'
import { iRLocation, RLocation } from '../location'

export type tAuthenticityTextCheckReferenceType =
  | eResultType.MRZ_TEXT
  | eResultType.VISUAL_TEXT
  | eResultType.BARCODE_TEXT

export const AuthenticityTextCheckReferenceTypes: tAuthenticityTextCheckReferenceType[] = [
  eResultType.MRZ_TEXT,
  eResultType.VISUAL_TEXT,
  eResultType.BARCODE_TEXT,
]

export interface iRAuthenticityTextCheckReference {
  type: tAuthenticityTextCheckReferenceType

  reference: string

  result: string

  location: iRLocation
}

export class RAuthenticityTextCheckReference implements iRAuthenticityTextCheckReference {
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(AuthenticityTextCheckReferenceTypes)
  type: tAuthenticityTextCheckReferenceType

  @IsDefined()
  @IsString()
  reference: string

  @IsDefined()
  @IsString()
  result: string

  /**
   * Area location
   * @type {RLocation}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => RLocation)
  location: RLocation
}
