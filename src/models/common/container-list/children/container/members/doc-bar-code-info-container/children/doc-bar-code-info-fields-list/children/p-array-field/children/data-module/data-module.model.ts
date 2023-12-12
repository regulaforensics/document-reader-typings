import { IsNumber, IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IDataModule {
  mData?: string
  mLength?: number
  mReserved1?: number
  mReserver2?: number
  mType?: number
}

export class DataModule implements IDataModule {
  @Expose()
  @IsOptional()
  @IsString()
  mData?: string

  @Expose()
  @IsOptional()
  @IsNumber()
  mLength?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  mReserved1?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  mReserver2?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  mType?: number
}
