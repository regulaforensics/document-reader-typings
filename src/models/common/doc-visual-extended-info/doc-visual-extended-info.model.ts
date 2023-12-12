import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'
import { DocVisualExtendedField, IDocVisualExtendedField } from './children'


export interface IDocVisualExtendedInfo {
  pArrayFields: IDocVisualExtendedField[]
}

export class DocVisualExtendedInfo implements IDocVisualExtendedInfo {
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => DocVisualExtendedField)
  pArrayFields: DocVisualExtendedField[]
}
