import { IsEnum, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

import { ParsingNotificationCodes } from 'consts'


export interface IProcessParamsRfid {
  paSensitiveCodesDisable?: ParsingNotificationCodes[]
}

export class ProcessParamsRfid implements IProcessParamsRfid {
  @Expose()
  @IsOptional()
  @IsEnum(ParsingNotificationCodes, { each: true })
  paSensitiveCodesDisable?: ParsingNotificationCodes[]
}
