import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { iRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { Default } from '@/decorators'


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
  * @type {iRectangleCoordinates}
  */
  rect?: iRectangleCoordinates
}

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
  * @type {RectangleCoordinates}
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  rect?: RectangleCoordinates
}
