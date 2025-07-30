import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { TOriginalRFIDGraphicsInfo as cTOriginalRFIDGraphicsInfo } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { GraphData } from './children'

export class TOriginalRFIDGraphicsInfo implements cTOriginalRFIDGraphicsInfo {
  /**
   * @type {GraphData[]}
   */
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => GraphData)
  @IsArray()
  RFID_ORIGINAL_GRAPH_DATA: GraphData[]
}

export type { TOriginalRFIDGraphicsInfo as iTOriginalRFIDGraphicsInfo }
