import { IsArray, IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { FaceDetection as iFaceDetection } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { FaceItem } from './children'

export class FaceDetection implements iFaceDetection {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Count: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  CountFalseDetection: number

  /**
   * @type {FaceItem[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => FaceItem)
  @IsArray()
  Res: FaceItem[]

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Reserved1?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Reserved2?: number
}

export type { iFaceDetection }
