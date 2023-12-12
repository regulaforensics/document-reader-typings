import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { FaceApiSearch, IFaceApiSearch } from './children'


export interface IFaceApi {
  url?: string
  mode?: string
  search?: IFaceApiSearch
  threshold?: number
  serviceTimeout?: number
  proxy?: string
  proxy_userpwd?: string
  proxy_type?: number
}

export class FaceApi implements IFaceApi {
  @Expose()
  @IsOptional()
  @IsString()
  url?: string

  @Expose()
  @IsOptional()
  @IsString()
  mode?: string

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => FaceApiSearch)
  search?: FaceApiSearch

  @Expose()
  @IsOptional()
  @IsNumber()
  threshold?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  serviceTimeout?: number

  @Expose()
  @IsOptional()
  @IsString()
  proxy?: string

  @Expose()
  @IsOptional()
  @IsString()
  proxy_userpwd?: string

  @Expose()
  @IsOptional()
  @IsNumber()
  proxy_type?: number
}
