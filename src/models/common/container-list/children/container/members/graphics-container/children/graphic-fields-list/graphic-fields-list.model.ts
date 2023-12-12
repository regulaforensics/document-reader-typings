import { IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { GraphicField, IGraphicField } from './children'


export interface IGraphicFieldsList {
  pArrayFields: IGraphicField[]
}

export class GraphicFieldsList implements IGraphicFieldsList {
  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => GraphicField)
  pArrayFields: GraphicField[]
}
