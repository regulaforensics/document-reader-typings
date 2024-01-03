import { IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface iProcessSystemInfo {
  license?: string
  recaptcha_token?: string
}

export class ProcessSystemInfo implements iProcessSystemInfo {
  @Expose()
  @IsOptional()
  @IsString()
  license?: string

  @Expose()
  @IsOptional()
  @IsString()
  recaptcha_token?: string
}
