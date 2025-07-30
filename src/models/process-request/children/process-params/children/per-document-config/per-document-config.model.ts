import { IsArray, IsInt, IsOptional } from 'class-validator'
import { PerDocumentConfig as cPerDocumentConfig } from '@regulaforensics/document-reader-webclient'

/**
 * Specific configuration for each document
 */
export class PerDocumentConfig implements cPerDocumentConfig {
  /**
   * Specific template IDs, for which apply current custom configuration
   * @type {number[]|undefined}
   */
  @IsOptional()
  @IsInt({ each: true })
  @IsArray()
  docID?: number[]

  /**
   * Contains items from eAuthenticity as sum via OR operation
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  excludeAuthChecks?: number
}

export type { PerDocumentConfig as iPerDocumentConfig }
