import { FileImage as cFileImage } from '@regulaforensics/document-reader-webclient'
import { IsDefined, IsInt, IsString } from 'class-validator'

export class FileImage implements cFileImage {
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

export type { FileImage as iFileImage }
