import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eGraphicFieldType, eRfidDataGroupTypeTag } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { aDocGraphicField } from '../../doc-graphic-field.abstract'


export interface iDocGraphicFieldRfid extends aDocGraphicField {
  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  * @memberof iDocGraphicFieldRfid
  */
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  * @type {number}
  * @memberof iDocGraphicFieldRfid
  */
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  * @type {number}
  * @memberof iDocGraphicFieldRfid
  */
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  * @type {number}
  * @memberof iDocGraphicFieldRfid
  */
  RFID_OriginEntryView: number
}

export class DocGraphicFieldRfid extends aDocGraphicField implements iDocGraphicFieldRfid {
  /**
  * Graphic field logical type
  * @type {eGraphicFieldType}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  FieldType: eGraphicFieldType

  /**
  * Graphic field symbolic name
  * @type {string}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @IsString()
  FieldName: string

  /**
  * Image data
  * @type {ImageData}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => ImageData)
  image: ImageData

  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidDataGroupTypeTag)
  RFID_OriginDG: eRfidDataGroupTypeTag

  /**
  * Record index of the source of the image with biometric information
  * in the datagroup
  * @type {number}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginDGTag: number

  /**
  * Index of the sample in the biometric data record
  * @type {number}
  * @memberof DocGraphicFieldRfid
  */
  @Expose()
  @IsDefined()
  @IsInt()
  RFID_OriginTagEntry: number

  /**
  * Index of the biometric data sample
  * @type {number}
  * @memberof DocGraphicFieldRfid
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
