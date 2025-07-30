import { IsDefined, IsInt, ValidateNested } from 'class-validator'
import { GraphData as cGraphData } from '@regulaforensics/document-reader-webclient'
import { Type } from 'class-transformer'

import { FileImage } from './children'

export class GraphData implements cGraphData {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FieldType: number

  /**
   * @type {FileImage}
   */
  @IsDefined()
  @ValidateNested()
  @Type(() => FileImage)
  File_Image: FileImage

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  GraphicsType: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginDG: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginDGTag: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginEntryView: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  OriginTagEntry: number
}

export type { GraphData as iGraphData }
