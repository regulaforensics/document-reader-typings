import { IsBoolean, IsInt, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IImageQA {
  dpiThreshold?: number
  angleThreshold?: number
  focusCheck?: boolean
  glaresCheck?: boolean
  colornessCheck?: boolean
  moireCheck?: boolean
  documentPositionIndent?: number
}

export class ImageQA implements IImageQA {
  @Expose()
  @IsOptional()
  @IsInt()
  dpiThreshold?: number

  @Expose()
  @IsOptional()
  @IsInt()
  angleThreshold?: number

  @Expose()
  @IsBoolean()
  @IsOptional()
  focusCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  glaresCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  colornessCheck?: boolean

  @Expose()
  @IsBoolean()
  @IsOptional()
  moireCheck?: boolean

  @Expose()
  @IsOptional()
  @IsNumber()
  documentPositionIndent?: number
}
