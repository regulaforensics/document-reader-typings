import { IsInt, IsOptional } from 'class-validator'
import { ErrorCoordinates as cErrorCoordinates } from '@regulaforensics/document-reader-webclient'

export class ErrorCoordinates implements cErrorCoordinates {
  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Left?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Top?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Right?: number

  /**
   * @type {number}
   */
  @IsOptional()
  @IsInt()
  Bottom?: number
}
