import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '~src/models/common/rectangle-coordinates'
import { AuthenticityResultType, CheckDiagnose, CheckResult, Critical, Light } from '~src/consts'


export interface IOCRSecurityTextResult {
  Type: AuthenticityResultType.OCR_SECURITY_TEXT
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  CriticalFlag?: Critical
  LightType?: Light
  FieldRect?: IRectangleCoordinates
  EtalonResultType?: number
  EtalonFieldType?: number
  EtalonLightType?: number
  SecurityTextResultOCR?: string
  EtalonResultOCR?: string
  Reserved1?: number
  Reserved2?: number
}

export class OCRSecurityTextResult implements IOCRSecurityTextResult {
  @Expose()
  @IsDefined()
  @IsIn([AuthenticityResultType.OCR_SECURITY_TEXT])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.OCR_SECURITY_TEXT

  @Expose()
  @IsOptional()
  @IsEnum(CheckResult)
  ElementResult?: CheckResult

  @Expose()
  @IsOptional()
  @IsEnum(CheckDiagnose)
  ElementDiagnose?: CheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(Critical)
  CriticalFlag?: Critical

  @Expose()
  @IsOptional()
  @IsEnum(Light)
  LightType?: Light

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  FieldRect?: RectangleCoordinates

  @Expose()
  @IsOptional()
  @IsNumber()
  EtalonResultType?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  EtalonFieldType?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  EtalonLightType?: number

  @Expose()
  @IsOptional()
  @IsString()
  SecurityTextResultOCR?: string

  @Expose()
  @IsOptional()
  @IsString()
  EtalonResultOCR?: string

  @Expose()
  @IsOptional()
  @IsNumber()
  Reserved1?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  Reserved2?: number
}
