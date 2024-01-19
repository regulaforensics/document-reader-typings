import { IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* Specific configuration for each document
*/
export interface iPerDocumentConfig {
  /**
  * Specific template IDs, for which apply current custom configuration
  * @type {number[]|undefined}
  */
  docID?: number[]

  /**
  * Contains items from eAuthenticity as sum via OR operation
  * @type {number|undefined}
  */
  excludeAuthChecks?: number
}

/**
* Specific configuration for each document
*/
export class PerDocumentConfig implements iPerDocumentConfig {
  /**
  * Specific template IDs, for which apply current custom configuration
  * @type {number[]|undefined}
  */
  @Expose()
  @IsOptional()
  @IsInt({ each: true })
  docID?: number[]

  /**
  * Contains items from eAuthenticity as sum via OR operation
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  @IsInt()
  excludeAuthChecks?: number
}
