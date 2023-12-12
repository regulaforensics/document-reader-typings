import { IsDefined, IsEnum, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { GraphicFieldType } from '~src/distinct/consts'
import { IImagesFieldValue, ImagesFieldValue } from './children'


export interface IImagesField {
  fieldName: string
  fieldType: GraphicFieldType
  valueList: IImagesFieldValue[]
}

export class ImagesField implements IImagesField {
  @Expose()
  @IsDefined()
  @IsString()
  fieldName: string

  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  fieldType: GraphicFieldType

  @Expose()
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ImagesFieldValue)
  valueList: ImagesFieldValue[]
}
