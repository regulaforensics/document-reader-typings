import { IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iTransactionInfo {
  ComputerName?: string
  DateTime?: string

  /**
  * ID of the transaction
  * @type {string|undefined}
  */
  TransactionID?: string
  UserName?: string
}

export class TransactionInfo implements iTransactionInfo {
  @Expose()
  @IsOptional()
  @IsString()
  ComputerName?: string

  @Expose()
  @IsOptional()
  @IsString()
  DateTime?: string

  /**
  * ID of the transaction
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  TransactionID?: string

  @Expose()
  @IsOptional()
  @IsString()
  UserName?: string
}
