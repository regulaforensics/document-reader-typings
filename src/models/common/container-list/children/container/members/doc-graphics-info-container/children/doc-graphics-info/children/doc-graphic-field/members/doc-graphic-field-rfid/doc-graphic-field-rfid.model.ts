import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { GraphicFieldType, RfidDataGroupTypeTag } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { DocGraphicField } from '../../doc-graphic-field.abstract'


export interface IDocGraphicFieldRfid extends DocGraphicField {
  /**
  * Data group
  * @type {RfidDataGroupTypeTag}
  */
  RFID_OriginDG: RfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  * @type {number}
  */
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  * @type {number}
  */
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  * @type {number}
  */
  RFID_OriginEntryView: number
}

export class DocGraphicFieldRfid extends DocGraphicField implements IDocGraphicFieldRfid {
  /**
  * Graphic field logical type
  * @type {GraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(GraphicFieldType)
  FieldType: GraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Image data
  * @type {ImageData}
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  /**
  * Data group
  * @type {RfidDataGroupTypeTag}
  */
  @Expose()
  @IsDefined()
  @IsEnum(RfidDataGroupTypeTag)
  RFID_OriginDG: RfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginEntryView: number

  /**
  * Create new instance of DocGraphicFieldRfid from plain object
  *
  * @param {unknown} input - plain object
  * @return {DocGraphicFieldRfid}
  */
  static fromPlain = (input: unknown): DocGraphicFieldRfid => plainToClass(DocGraphicFieldRfid, input)
}
