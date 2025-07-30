import { TransactionInfo as cTransactionInfo } from '@regulaforensics/document-reader-webclient'
import { IsOptional, IsString, ValidateNested } from 'class-validator'

import { DocumentsDatabase } from './children'
import { Type } from 'class-transformer'

/**
 * Transaction info
 */
export class TransactionInfo implements cTransactionInfo {
  /**
   * Name of the computer
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  ComputerName?: string

  /**
   * Date and time of the transaction
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  DateTime?: string

  /**
   * Document database information
   * @type {DocumentsDatabase}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => DocumentsDatabase)
  DocumentsDatabase?: DocumentsDatabase

  /**
   * System information
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  SystemInfo?: string

  /**
   * Transaction tag
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  Tag?: string

  /**
   * ID of the transaction
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  TransactionID?: string

  /**
   * Name of the user
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  UserName?: string

  /**
   * SDK version
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  Version?: string
}

export type { TransactionInfo as iTransactionInfo }
