import { IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'

import { BarCodeModuleType } from '@/consts'
import { Default } from '@/decorators'


export interface ITipDecodeModule {
  /**
  * Read module data
  */
  mData: string

  /**
  * Number of significant elements of mData
  */
  mLength: number

  /**
  * @internal
  */
  mReserved1?: number

  /**
  * @internal
  */
  mReserver2?: number

  /**
  * Module type
  */
  mType: BarCodeModuleType
}

export class TipDecodeModule implements ITipDecodeModule {
  /**
  * Read module data
  */
  @Expose()
  @IsDefined()
  @IsString()
  mData: string

  /**
  * Number of significant elements of mData
  */
  @Expose()
  @IsDefined()
  @IsNumber()
  mLength: number

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  mReserved1?: number

  /**
  * @internal
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  mReserver2?: number

  /**
  * Module type
  */
  @Expose()
  @IsDefined()
  @IsEnum(BarCodeModuleType)
  @Default(BarCodeModuleType.ALL)
  mType: BarCodeModuleType
}
