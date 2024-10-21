import { IsBase64, IsOptional, IsString } from 'class-validator'


/**
* System info
*/
export interface iProcessSystemInfo {
  /**
  * Base64 encoded license file
  * @type {string|undefined}
  */
  license?: string

  /**
  * For internal use. Demo-sites recaptcha token.
  * @type {string|undefined}
  * @internal
  */
  recaptcha_token?: string
}

/**
* System info
*/
export class ProcessSystemInfo implements iProcessSystemInfo {
  /**
  * Base64 encoded license file
  * @type {string|undefined}
  */
  @IsOptional()
  @IsString()
  @IsBase64()
  license?: string

  /**
  * For internal use. Demo-sites recaptcha token.
  * @type {string|undefined}
  * @internal
  */
  @IsOptional()
  @IsString()
  recaptcha_token?: string
}
