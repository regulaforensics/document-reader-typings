import { IsDefined, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from '@/models/common/rectangle-coordinates'
import { Default } from '@/decorators'


export interface ITextSymbol {
  /**
  * Symbol code
  */
  code: number

  /**
  * Recognition probability
  */
  probability: number

  /**
  * Symbol rectangular area
  */
  rect?: IRectangleCoordinates
}

export class TextSymbol implements ITextSymbol {
  /**
  * Symbol code
  */
  @Expose()
  @IsDefined()
  @IsInt()
  code: number

  /**
  * Recognition probability
  */
  @Expose()
  @IsDefined()
  @IsInt()
  @Default(0)
  probability: number

  /**
  * Symbol rectangular area
  */
  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  rect?: RectangleCoordinates
}
