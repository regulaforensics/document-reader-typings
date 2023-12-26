import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { GraphicFieldType, RfidDataGroupTypeTag } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { DocGraphicField } from '../../doc-graphic-field.abstract'


export interface IDocGraphicFieldRfid extends DocGraphicField {
  /**
  * Data group
  */
  RFID_OriginDG: RfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  */
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  */
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  */
  RFID_OriginEntryView: number
}

export class DocGraphicFieldRfid extends DocGraphicField implements IDocGraphicFieldRfid {
  /**
  * Graphic field logical type
  */
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  FieldType: GraphicFieldType

  /**
  * Graphic field symbolic name
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Image data
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  /**
  * Data group
  */
  @Expose()
  @IsDefined()
  @IsEnum(RfidDataGroupTypeTag)
  RFID_OriginDG: RfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginEntryView: number

  static fromPlain = (input: unknown): DocGraphicFieldRfid => plainToClass(DocGraphicFieldRfid, input)
}
