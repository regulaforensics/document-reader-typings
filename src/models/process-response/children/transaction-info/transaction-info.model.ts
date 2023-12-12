import { IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface ITransactionInfo {
  ComputerName?: string
  DateTime?: string
  TransactionID?: string
  UserName?: string
}

export class TransactionInfo implements ITransactionInfo {
  @Expose()
  @IsOptional()
  @IsString()
  ComputerName?: string

  @Expose()
  @IsOptional()
  @IsString()
  DateTime?: string

  @Expose()
  @IsOptional()
  @IsString()
  TransactionID?: string

  @Expose()
  @IsOptional()
  @IsString()
  UserName?: string
}
