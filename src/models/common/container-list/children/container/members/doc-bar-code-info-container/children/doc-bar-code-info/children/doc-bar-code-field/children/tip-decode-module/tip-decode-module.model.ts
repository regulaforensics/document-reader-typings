import { IsDefined, IsEnum, IsNumber, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eBarCodeModuleType } from '@/consts'
import { Default } from '@/decorators'


export interface iTipDecodeModule {
  /**
  * Read module data
  * @type {string}
  * @memberof iTipDecodeModule
  */
  mData: string

  /**
  * Number of significant elements of mData
  * @type {number}
  * @memberof iTipDecodeModule
  */
  mLength: number

  /**
  * @internal
  * @type {unknown}
  * @memberof iTipDecodeModule
  */
  mReserved1?: unknown

  /**
  * @internal
  * @type {unknown}
  * @memberof iTipDecodeModule
  */
  mReserver2?: unknown

  /**
  * Module type
  * @type {eBarCodeModuleType}
  * @memberof iTipDecodeModule
  */
  mType: eBarCodeModuleType
}

export class TipDecodeModule implements iTipDecodeModule {
  /**
  * Read module data
  * @type {string}
  * @memberof TipDecodeModule
  */
  @Expose()
  @IsDefined()
  @IsString()
  mData: string

  /**
  * Number of significant elements of mData
  * @type {number}
  * @memberof TipDecodeModule
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  mLength: number

  /**
  * @internal
  * @type {unknown}
  * @memberof TipDecodeModule
  */
  @Expose()
  mReserved1?: unknown

  /**
  * @internal
   * @type {unknown}
   * @memberof TipDecodeModule
  */
  @Expose()
  mReserver2?: unknown

  /**
  * Module type
  * @type {eBarCodeModuleType}
  * @memberof TipDecodeModule
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeModuleType)
  @Default(eBarCodeModuleType.ALL)
  mType: eBarCodeModuleType
}
