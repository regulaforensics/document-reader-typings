import { IsDefined, IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IRfidOrigin {
  dg: number
  dgTag?: number
  tagEntry?: number
  entryView?: number
}

export class RfidOrigin implements IRfidOrigin {
  @Expose()
  @IsDefined()
  @IsNumber()
  dg: number

  @Expose()
  @IsOptional()
  @IsNumber()
  dgTag?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  tagEntry?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  entryView?: number
}
