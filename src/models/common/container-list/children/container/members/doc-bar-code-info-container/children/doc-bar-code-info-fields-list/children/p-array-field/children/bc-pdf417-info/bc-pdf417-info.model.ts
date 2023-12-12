import { IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IBcPDF417INFO {
  Angle?: number
  bcColumn?: number
  bcErrorLevel?: number
  bcRow?: number
  minX?: number
  minY?: number
}

export class BcPDF417INFO implements IBcPDF417INFO {
  @Expose()
  @IsOptional()
  @IsNumber()
  Angle?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcColumn?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcErrorLevel?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcRow?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  minX?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  minY?: number
}
