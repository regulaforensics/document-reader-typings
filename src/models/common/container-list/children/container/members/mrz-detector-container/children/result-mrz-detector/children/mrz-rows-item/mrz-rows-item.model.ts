import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { MRZRowsItem as cMrzRowsItem } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { Symbol } from './children'

export class MRZRowsItem implements cMrzRowsItem {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  length: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  maxLength: number

  /**
   * @type {Symbol[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => Symbol)
  @IsArray()
  symbols: Symbol[]
}

export type { MRZRowsItem as iMrzRowsItem }
