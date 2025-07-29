import { IsArray, IsDefined, IsInt } from 'class-validator'
import { ResultMRZDetector as iResultMRZDetector } from '@regulaforensics/document-reader-webclient'

import { MRZRowsItem } from './children'

export class ResultMRZDetector implements iResultMRZDetector {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  MRZFormat: number

  /**
   * @type {MRZRowsItem}
   */
  MRZRows: MRZRowsItem[]

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  MRZRowsNum: number

  /**
   * @type {number[]}
   */
  @IsDefined()
  @IsArray()
  @IsInt({ each: true })
  boundingQuadrangle: number[]
}

export type { iResultMRZDetector }
