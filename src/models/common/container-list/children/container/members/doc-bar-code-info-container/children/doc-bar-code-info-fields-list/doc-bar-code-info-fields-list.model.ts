import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IPArrayField, PArrayField } from './children'


export interface IDocBarCodeInfoFieldsList {
  nFields?: number
  pArrayFields?: IPArrayField[]
}

export class DocBarCodeInfoFieldsList implements IDocBarCodeInfoFieldsList {
  @Expose()
  @IsOptional()
  @IsInt()
  nFields?: number

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PArrayField)
  @IsArray()
  pArrayFields?: PArrayField[]
}
