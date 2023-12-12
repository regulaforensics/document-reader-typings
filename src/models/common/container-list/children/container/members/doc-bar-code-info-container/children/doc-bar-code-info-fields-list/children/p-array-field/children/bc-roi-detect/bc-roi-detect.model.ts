import { IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IBcROIDETECT {
  bottom?: number
  left?: number
  right?: number
  top?: number
}

export class BcROIDETECT implements IBcROIDETECT {
  @Expose()
  @IsOptional()
  @IsNumber()
  bottom?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  left?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  right?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  top?: number
}
