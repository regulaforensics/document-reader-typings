import { IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { VerifiedFieldMap } from './children'


export interface IListVerifiedFields {
  pFieldMaps?: VerifiedFieldMap[]
}

export class ListVerifiedFields implements IListVerifiedFields {
  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => VerifiedFieldMap)
  pFieldMaps?: VerifiedFieldMap[]
}
