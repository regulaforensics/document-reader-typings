import { IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { eBarCodeModuleType } from '@/consts'
import { Default } from '@/decorators'


/**
* Structure is used for storing the results of one bar-code module reading.
*/
export interface iTipDecodeModule {
  /**
  * Read module data
  * @type {string}
  */
  mData: string

  /**
  * Number of significant elements of mData
  * @type {number}
  */
  mLength: number

  /**
  * @internal
  * @type {number|undefined}
  */
  mReserved1?: number

  /**
  * @internal
  * @type {number|undefined}
  */
  mReserver2?: number

  /**
  * Module type
  * @type {eBarCodeModuleType}
  */
  mType: eBarCodeModuleType
}

/**
* Structure is used for storing the results of one bar-code module reading.
*/
export class TipDecodeModule implements iTipDecodeModule {
  /**
  * Read module data
  * @type {string}
  */
  @Expose()
  @IsDefined()
  @IsString()
  mData: string

  /**
  * Number of significant elements of mData
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  mLength: number

  /**
  * @internal
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  mReserved1?: number

  /**
  * @internal
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  mReserver2?: number

  /**
  * Module type
  * @type {eBarCodeModuleType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(eBarCodeModuleType)
  @Default(eBarCodeModuleType.ALL)
  mType: eBarCodeModuleType
}
