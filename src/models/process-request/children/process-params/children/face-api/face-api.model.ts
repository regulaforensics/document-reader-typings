import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { FaceApi as cFaceApi } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { FaceApiSearch } from './children'

/**
 * Face API parameters
 */
export class FaceApi implements cFaceApi {
  /**
   * The URL of the Regula Face Web service to be used.
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  url?: string

  /**
   * The processing mode: "match" or "match+search"
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  mode?: string

  /**
   * Face search filter
   * @type {FaceApiSearch|undefined}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => FaceApiSearch)
  search?: FaceApiSearch

  /**
   * The similarity threshold, 0-100. Above 75 means that the faces' similarity is verified, below 75 is not.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  threshold?: number

  /**
   * The timeout for the service request, milliseconds
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  serviceTimeout?: number

  /**
   * Proxy to use, should be set according to the
   * @see {@link https://curl.se/libcurl/c/CURLOPT_PROXY.html} cURL standard.
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  proxy?: string

  /**
   * Proxy userpwd to use, should be set according to the
   * @see {@link https://curl.se/libcurl/c/CURLOPT_PROXYUSERPWD.html} cURL standard.
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  proxy_userpwd?: string

  /**
   * Proxy type to use, should be set according to the
   * @see {@link https://curl.se/libcurl/c/CURLOPT_PROXYTYPE.html} cURL standard.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  proxy_type?: number

  /**
   * The age threshold for the portrait comparison. Default: 13.
   * @type {number|undefined}
   */
  @IsOptional()
  @IsNumber()
  childAgeThreshold?: number

  /**
   * Estimated duration of validity for a child\'s passport, years. Default: 5.
   * @type {number}
   */
  @IsOptional()
  @IsNumber()
  childDocValidityYears?: number
}

export type { FaceApi as iFaceApi }
