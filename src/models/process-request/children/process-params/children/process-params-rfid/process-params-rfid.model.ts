import { IsEnum, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { eParsingNotificationCodes } from '@/consts'


export interface iProcessParamsRfid {
  paSensitiveCodesDisable?: eParsingNotificationCodes[]
}

export class ProcessParamsRfid implements iProcessParamsRfid {
  @Expose()
  @IsOptional()
  @IsEnum(eParsingNotificationCodes, { each: true })
  paSensitiveCodesDisable?: eParsingNotificationCodes[]
}
