import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { AuthenticityCheckList as cAuthenticityCheckList } from '@regulaforensics/document-reader-webclient'
import { Transform } from 'class-transformer'

import { uAuthenticityCheckResult, transformToAuthenticityCheckResultList } from './children'

/**
 * Structure serves for storing the result of document authenticity check using the images for different lighting
 * schemes and passing it to the user application.
 */
export interface iAuthenticityCheckList extends cAuthenticityCheckList {
  /**
   * Array of data structures with the results of performing of different document authenticity checks
   * @type {uAuthenticityCheckResult[]}
   */
  List: uAuthenticityCheckResult[]
}

/**
 * Structure serves for storing the result of document authenticity check using the images for different lighting
 * schemes and passing it to the user application.
 */
export class AuthenticityCheckList implements iAuthenticityCheckList {
  /**
   * Number of elements in the list
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Count: number

  /**
   * Array of data structures with the results of performing of different document authenticity checks
   * @type {uAuthenticityCheckResult[]}
   */
  @ValidateNested({ each: true })
  @Transform(({ obj }) => transformToAuthenticityCheckResultList(obj.List), { toClassOnly: true })
  @IsArray()
  List: uAuthenticityCheckResult[]
}
