import { IsArray, IsDefined, IsEnum, IsIn, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { eAuthenticity, eCheckDiagnose, eCheckResult, eLights } from '@/consts'


export interface iFiberResult {
  Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND
  ElementResult?: eCheckResult
  ElementDiagnose?: eCheckDiagnose
  RectCount?: number
  ExpectedCount?: number
  LightValue?: eLights
  LightDisp?: number
  RectArray?: iRectangleCoordinates[]
  Width?: number[]
  Length?: number[]
  Area?: number[]
  ColorValues?: number[]
}

export class FiberResult implements iFiberResult {
  @Expose()
  @IsDefined()
  @IsIn([eAuthenticity.UV_FIBERS, eAuthenticity.UV_BACKGROUND])
  @IsEnum(eAuthenticity)
  Type: eAuthenticity.UV_FIBERS | eAuthenticity.UV_BACKGROUND

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
  @IsInt()
  RectCount?: number

  @Expose()
  @IsOptional()
  @IsInt()
  ExpectedCount?: number

  @Expose()
  @IsOptional()
  @IsEnum(eLights)
  LightValue?: eLights

  @Expose()
  @IsOptional()
  @IsNumber()
  LightDisp?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RectangleCoordinates)
  RectArray?: RectangleCoordinates[]

  @Expose()
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  Width?: number[]

  @Expose()
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  Length?: number[]

  @Expose()
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  Area?: number[]
}
