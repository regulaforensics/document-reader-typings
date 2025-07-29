import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { TOriginalRFIDGraphicsInfo as iTOriginalRFIDGraphicsInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { GraphData } from './children'

export class TOriginalRFIDGraphicsInfo implements iTOriginalRFIDGraphicsInfo {
  /**
   * @type {GraphData[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => GraphData)
  @IsArray()
  RFID_ORIGINAL_GRAPH_DATA: GraphData[]
}

export type { iTOriginalRFIDGraphicsInfo }
