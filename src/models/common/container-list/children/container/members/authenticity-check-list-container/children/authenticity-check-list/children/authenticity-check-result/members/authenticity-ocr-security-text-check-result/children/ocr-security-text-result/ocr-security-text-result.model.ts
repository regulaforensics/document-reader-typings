import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { Authenticity, CheckDiagnose, CheckResult, SecurityCriticalFlag, Lights } from '@/consts'


export interface IOCRSecurityTextResult {
  Type: Authenticity.OCR_SECURITY_TEXT
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  CriticalFlag?: SecurityCriticalFlag
  LightType?: Lights
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
  @IsIn([Authenticity.OCR_SECURITY_TEXT])
  @IsEnum(Authenticity)
  Type: Authenticity.OCR_SECURITY_TEXT

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
  @IsEnum(SecurityCriticalFlag)
  CriticalFlag?: SecurityCriticalFlag

  @Expose()
  @IsOptional()
  @IsEnum(Lights)
  LightType?: Lights

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
