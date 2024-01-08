import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRect, Rect } from '@/models/common/rect'
import { Default } from '@/decorators'


/**
* Used for storing symbol reading result
*/
export interface iTextSymbol {
  /**
  * Symbol code
  * @type {number}
  */
  code: number

  /**
  * Recognition probability
  * @type {number}
  */
  probability: number

  /**
  * Symbol rectangular area
  * @type {iRect|undefined}
  */
  rect?: iRect
}

/**
* Used for storing symbol reading result
*/
export class TextSymbol implements iTextSymbol {
  /**
  * Symbol code
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  code: number

  /**
  * Recognition probability
  * @type {number}
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  probability: number

  /**
  * Symbol rectangular area
  * @type {Rect|undefined}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Rect)
  rect?: Rect
}
