import { IsDefined, IsInt, IsNumber } from 'class-validator'
import { TrfFtBytes as iTrfFtBytes } from '@regulaforensics/document-reader-webclient'

/**
 * Structure is used to store an array of binary information that is a part of one of the informational data groups
 */
export class TrfFtBytes implements iTrfFtBytes {
  /**
   * Logical type of the field
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Type: number

  /**
   * Result of logical analysis of compliance of the contents of the field
   * with the requirements of the specification
   * @type {number}
   */
  @IsDefined()
  @IsNumber()
  Status: number

  /**
   * Length of Data array
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  Length: number

  /**
   * Binary data array. Base64 encoded.
   * @type {string|null}
   */
  @IsDefined()
  Data: string | null
}

export type { iTrfFtBytes }
