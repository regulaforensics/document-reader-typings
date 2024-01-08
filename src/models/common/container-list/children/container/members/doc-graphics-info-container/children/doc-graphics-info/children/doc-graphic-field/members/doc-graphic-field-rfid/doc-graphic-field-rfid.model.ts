import { IsDefined, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { Expose, plainToClass, Type } from 'class-transformer'

import { eGraphicFieldType, eRfidDataGroupTypeTag } from '@/consts'
import { ImageData } from '@/models/common/image-data'
import { aDocGraphicField } from '../../doc-graphic-field.abstract'


/**
* Information about one graphic field, which is a RFID
*/
export interface iDocGraphicFieldRfid extends aDocGraphicField {
  /**
  * Data group
  * @type {eRfidDataGroupTypeTag}
  */
  RFID_OriginDG: eRfidDataGroupTypeTag

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

/**
* Information about one graphic field, which is a RFID
*/
export class DocGraphicFieldRfid extends aDocGraphicField implements iDocGraphicFieldRfid {
  /**
  * Graphic field logical type
  * @type {eGraphicFieldType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eGraphicFieldType)
  FieldType: eGraphicFieldType

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
  * @type {eRfidDataGroupTypeTag}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eRfidDataGroupTypeTag)
  RFID_OriginDG: eRfidDataGroupTypeTag

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
