import { IsArray, IsInt, IsOptional } from 'class-validator'


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
