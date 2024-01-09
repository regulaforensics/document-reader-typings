import { IsDefined, IsEnum, IsIn, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eSecurityCriticalFlag, eLights } from '@/consts'


export interface iOCRSecurityTextResult {
  Type: eAuthenticity.OCR_SECURITY_TEXT
  ElementResult?: eCheckResult
  ElementDiagnose?: eCheckDiagnose
  CriticalFlag?: eSecurityCriticalFlag
  LightType?: eLights
  FieldRect?: iRect
  EtalonResultType?: number
  EtalonFieldType?: number
  EtalonLightType?: number
  SecurityTextResultOCR?: string
  EtalonResultOCR?: string
  Reserved1?: number
  Reserved2?: number
}

export class OCRSecurityTextResult implements iOCRSecurityTextResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.OCR_SECURITY_TEXT])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.OCR_SECURITY_TEXT

  @Expose()
  @IsOptional()
  @IsEnum(eCheckResult)
  ElementResult?: eCheckResult

  @Expose()
  @IsOptional()
  @IsEnum(eCheckDiagnose)
  ElementDiagnose?: eCheckDiagnose

  @Expose()
  @IsOptional()
  @IsEnum(eSecurityCriticalFlag)
  CriticalFlag?: eSecurityCriticalFlag

  @Expose()
  @IsOptional()
  @IsEnum(eLights)
  LightType?: eLights

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  FieldRect?: Rect

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
