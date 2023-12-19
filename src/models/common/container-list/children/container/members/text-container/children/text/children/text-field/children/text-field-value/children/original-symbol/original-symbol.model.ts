import { IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { IRectangleCoordinates, RectangleCoordinates } from 'models/common/rectangle-coordinates'


export interface IOriginalSymbol {
  code?: number
  probability?: number
  rect?: IRectangleCoordinates
}

export class OriginalSymbol implements IOriginalSymbol {
  @Expose()
  @IsOptional()
  @IsInt()
  code?: number

  @Expose()
  @IsOptional()
  @IsInt()
  probability?: number

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => RectangleCoordinates)
  rect?: RectangleCoordinates
}
