import { DocumentsDatabase as iDocumentsDatabase } from '@regulaforensics/document-reader-webclient'
import { IsOptional, IsString } from 'class-validator'

/**
 * Document database information
 */
export class DocumentsDatabase implements iDocumentsDatabase {
  /**
   * Document database description
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  Description?: string

  /**
   * Date the document database was created
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  ExportDate?: string

  /**
   * Document database identifier
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  ID?: string

  /**
   * Document database version
   * @type {string|undefined}
   */
  @IsOptional()
  @IsString()
  Version?: string
}

export type { iDocumentsDatabase }
