import { FileImage as iFileImage } from '@regulaforensics/document-reader-webclient'
import { IsDefined, IsInt, IsString } from 'class-validator'

export class FileImage implements iFileImage {
  /**
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Data: string

  /**
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Length: number
}

export type { iFileImage }
