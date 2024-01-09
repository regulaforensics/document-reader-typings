import { IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


/**
* A search filter that can be applied if the "match+search" mode is enabled. May include limit, threshold, group_ids.
* If the group_ids are specified, the search is performed only in these groups.
*/
export interface iFaceApiSearch {
  /**
  * The maximum number of results to be returned.
  * @type {number|undefined}
  */
  limit?: number

  /**
  * The similarity threshold.
  * @type {number|undefined}
  */
  threshold?: number

  /**
  * The groups where to conduct the search.
  * @type {number[]|undefined}
  */
  group_ids?: number[]
}

/**
* A search filter that can be applied if the "match+search" mode is enabled. May include limit, threshold, group_ids.
* If the group_ids are specified, the search is performed only in these groups.
*/
export class FaceApiSearch implements iFaceApiSearch {
  /**
  * The maximum number of results to be returned.
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  limit?: number

  /**
  * The similarity threshold.
  * @type {number|undefined}
  */
  @Expose()
  @IsOptional()
  @IsNumber()
  threshold?: number

  /**
  * The groups where to conduct the search.
  * @type {number[]|undefined}
  */
  @Expose()
  @IsOptional()
  @IsNumber({}, { each: true })
  group_ids?: number[]
}
