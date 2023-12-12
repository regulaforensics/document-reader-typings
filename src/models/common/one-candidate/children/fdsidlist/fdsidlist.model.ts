import { IsArray, IsBoolean, IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { DocumentFormat, DocumentType } from 'consts'


export interface IFDSIDList {
  ICAOCode?: string
  List?: number[]
  dType?: DocumentType
  dFormat?: DocumentFormat
  dMRZ?: boolean
  dDescription?: string
  dYear?: string
  dCountryName?: string
  dStateCode?: string
  dStateName?: string
}

export class FDSIDList implements IFDSIDList {
  @Expose()
  @IsString()
  @IsOptional()
  ICAOCode?: string

  @Expose()
  @IsDefined()
  @IsArray()
  @IsNumber({}, { each: true })
  List?: number[]

  @Expose()
  @IsOptional()
  @IsEnum(DocumentType)
  dType?: DocumentType

  @Expose()
  @IsOptional()
  @IsEnum(DocumentFormat)
  dFormat?: DocumentFormat

  @Expose()
  @IsOptional()
  @IsBoolean()
  dMRZ?: boolean

  @Expose()
  @IsOptional()
  @IsString()
  dDescription?: string

  @Expose()
  @IsOptional()
  @IsString()
  dYear?: string

  @Expose()
  @IsOptional()
  @IsString()
  dCountryName?: string

  @Expose()
  @IsOptional()
  @IsString()
  dStateCode?: string

  @Expose()
  @IsOptional()
  @IsString()
  dStateName?: string
}
