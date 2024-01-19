import { IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* Transaction info
*/
export interface iTransactionInfo {
  /**
  * Name of the computer
  * @type {string|undefined}
  */
  ComputerName?: string

  /**
  * Date and time of the transaction
  * @type {string|undefined}
  */
  DateTime?: string

  /**
  * ID of the transaction
  * @type {string|undefined}
  */
  TransactionID?: string

  /**
  * Name of the user
  * @type {string|undefined}
  */
  UserName?: string
}

/**
* Transaction info
*/
export class TransactionInfo implements iTransactionInfo {
  /**
  * Name of the computer
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  ComputerName?: string

  /**
  * Date and time of the transaction
  * @type {string|undefined}
  */
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

  /**
  * Name of the user
  * @type {string|undefined}
  */
  @Expose()
  @IsOptional()
  @IsString()
  UserName?: string
}
