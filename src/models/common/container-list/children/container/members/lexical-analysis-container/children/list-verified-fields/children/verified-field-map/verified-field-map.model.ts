import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { LCID, TextFieldType, VerificationResult } from '~src/consts'


export interface IVerifiedFieldMap {
  wFieldType?: TextFieldType
  wLCID?: LCID
  Field_MRZ?: string
  Field_Visual?: string
  Field_Barcode?: string
  Field_RFID?: string
  Matrix?: VerificationResult[]
}

export class VerifiedFieldMap implements IVerifiedFieldMap {
  @Expose()
  @IsOptional()
  @IsEnum(TextFieldType)
  wFieldType?: TextFieldType

  @Expose()
  @IsOptional()
  @IsEnum(LCID)
  wLCID?: LCID

  @Expose()
  @IsOptional()
  @IsString()
  Field_MRZ?: string

  @Expose()
  @IsOptional()
  @IsString()
  Field_Visual?: string

  @Expose()
  @IsOptional()
  @IsString()
  Field_Barcode?: string

  @Expose()
  @IsOptional()
  @IsString()
  Field_RFID?: string

  @Expose()
  @IsOptional()
  @IsEnum(VerificationResult, { each: true })
  @IsArray()
  Matrix?: VerificationResult[]
}
