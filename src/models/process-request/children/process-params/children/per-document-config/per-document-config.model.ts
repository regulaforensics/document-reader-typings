import { IsInt, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iPerDocumentConfig {
  docID?: number[]
  excludeAuthChecks?: number
}

export class PerDocumentConfig implements iPerDocumentConfig {
  @Expose()
  @IsOptional()
  @IsInt({ each: true })
  docID?: number[]

  @Expose()
  @IsOptional()
  @IsInt()
  excludeAuthChecks?: number
}
