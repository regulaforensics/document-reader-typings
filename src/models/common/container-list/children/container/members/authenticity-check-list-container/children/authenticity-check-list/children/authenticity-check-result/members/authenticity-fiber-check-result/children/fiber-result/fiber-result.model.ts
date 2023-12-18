import { IsArray, IsDefined, IsEnum, IsIn, IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'
import { AuthenticityResultType, CheckDiagnose, CheckResult, Light } from 'consts'


export interface IFiberResult {
  Type: AuthenticityResultType.UV_FIBERS | AuthenticityResultType.UV_BACKGROUND
  ElementResult?: CheckResult
  ElementDiagnose?: CheckDiagnose
  RectCount?: number
  ExpectedCount?: number
  LightValue?: Light
  LightDisp?: number
  RectArray?: IRectangleCoordinates[]
  Width?: number[]
  Length?: number[]
  Area?: number[]
  ColorValues?: number[]
}

export class FiberResult implements IFiberResult {
  @Expose()
  @IsDefined()
  @IsIn([AuthenticityResultType.UV_FIBERS, AuthenticityResultType.UV_BACKGROUND])
  @IsEnum(AuthenticityResultType)
  Type: AuthenticityResultType.UV_FIBERS | AuthenticityResultType.UV_BACKGROUND

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
  @IsInt()
  RectCount?: number

  @Expose()
  @IsOptional()
  @IsInt()
  ExpectedCount?: number

  @Expose()
  @IsOptional()
  @IsEnum(Light)
  LightValue?: Light

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
