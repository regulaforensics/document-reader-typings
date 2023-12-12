import { IsOptional, IsString } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IProcessSystemInfo {
  license?: string
  recaptcha_token?: string
}

export class ProcessSystemInfo implements IProcessSystemInfo {
  @Expose()
  @IsOptional()
  @IsString()
  license?: string

  @Expose()
  @IsOptional()
  @IsString()
  recaptcha_token?: string
}
