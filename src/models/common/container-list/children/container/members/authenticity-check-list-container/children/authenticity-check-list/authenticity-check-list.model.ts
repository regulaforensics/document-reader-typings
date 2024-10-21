import { IsArray, IsDefined, IsInt, ValidateNested } from 'class-validator'
import { Transform } from 'class-transformer'

import { Default } from '@/decorators'
import { iuAuthenticityCheckResult, uAuthenticityCheckResult } from './children'


/**
* Structure serves for storing the result of document authenticity check using the images for different lighting
* schemes and passing it to the user application.
*/
export interface iAuthenticityCheckList {
  /**
  * Number of elements in the list
  * @type {number}
  */
  Count: number

  /**
  * Array of data structures with the results of performing of different document authenticity checks
  * @type {iuAuthenticityCheckResult[]}
  */
  List: iuAuthenticityCheckResult[]
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
  * @type {iuAuthenticityCheckResult[]}
  */
  @ValidateNested({ each: true })
  @Transform(({ obj }) => uAuthenticityCheckResult.transformList(obj.List), { toClassOnly: true })
  @IsArray()
  @Default([])
  List: uAuthenticityCheckResult[]
}
