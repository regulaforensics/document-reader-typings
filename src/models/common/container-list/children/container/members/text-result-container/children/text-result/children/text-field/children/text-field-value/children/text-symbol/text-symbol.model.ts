import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { Default } from '@/decorators'


export interface ITextSymbol {
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
  * @type {IRectangleCoordinates}
  */
  rect?: IRectangleCoordinates
}

export class TextSymbol implements ITextSymbol {
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
