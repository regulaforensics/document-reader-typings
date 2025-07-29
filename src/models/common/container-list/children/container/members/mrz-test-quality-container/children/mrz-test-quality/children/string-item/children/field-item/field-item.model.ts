import { IsDefined, IsInt } from 'class-validator'
import { FieldItem as iFieldItem } from '@regulaforensics/document-reader-webclient'

export class FieldItem implements iFieldItem {
  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FieldLength: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FieldPos: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  FieldType: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  TEST_RESULT: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  ValidCheckSum: number

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  reserved: number
}

export type { iFieldItem }
