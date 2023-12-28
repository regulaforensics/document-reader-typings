import { IsDefined, IsEnum, IsNumber, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { BarCodeModuleType } from '@/consts'
import { Default } from '@/decorators'


export interface ITipDecodeModule {
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
  */
  mReserved1?: unknown

  /**
  * @internal
  */
  mReserver2?: unknown

  /**
  * Module type
  * @type {BarCodeModuleType}
  */
  mType: BarCodeModuleType
}

export class TipDecodeModule implements ITipDecodeModule {
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
  */
  @Expose()
  mReserved1?: number

  /**
  * @internal
  */
  @Expose()
  mReserver2?: number

  /**
  * Module type
  * @type {BarCodeModuleType}
  */
  @Expose()
  @IsDefined()
  @IsEnum(BarCodeModuleType)
  @Default(BarCodeModuleType.ALL)
  mType: BarCodeModuleType
}
