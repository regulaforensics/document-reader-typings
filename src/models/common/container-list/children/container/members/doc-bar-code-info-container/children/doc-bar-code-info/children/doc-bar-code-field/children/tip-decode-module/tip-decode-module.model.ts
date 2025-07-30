import { IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { DataModule } from '@regulaforensics/document-reader-webclient'

import { eBarCodeModuleType } from '@/consts'

/**
 * Structure is used for storing the results of one bar-code module reading.
 */
export class TipDecodeModule implements DataModule {
  /**
   * Read module data
   * @type {string}
   */
  @IsDefined()
  @IsString()
  mData: string

  /**
   * Number of significant elements of mData
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  mLength: number

  /**
   * @internal
   * @type {number|undefined}
   */
  @IsOptional()
  mReserved1?: number

  /**
   * @internal
   * @type {number|undefined}
   */
  @IsOptional()
  mReserver2?: number

  /**
   * Module type
   * @type {eBarCodeModuleType}
   */
  @IsDefined()
  @IsEnum(eBarCodeModuleType)
  mType: eBarCodeModuleType
}
