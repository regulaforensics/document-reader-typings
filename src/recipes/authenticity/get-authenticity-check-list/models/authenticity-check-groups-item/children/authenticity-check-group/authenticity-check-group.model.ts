import { IsArray, IsDefined, IsEnum, ValidateNested } from 'class-validator'
import { Expose, plainToInstance, Transform } from 'class-transformer'

import { eAuthenticity, eCheckResult } from '@/consts'
import { uRAuthenticityCheck, transformToRAuthenticityCheckList } from './children'

export interface iRAuthenticityCheckGroup {
  group: eAuthenticity

  checkResult: eCheckResult

  checks: uRAuthenticityCheck[]
}

@Expose()
export class RAuthenticityCheckGroup implements iRAuthenticityCheckGroup {
  @IsDefined()
  @IsEnum(eAuthenticity)
  group: eAuthenticity

  @IsDefined()
  @IsEnum(eCheckResult)
  checkResult: eCheckResult

  @ValidateNested({ each: true })
  @Transform(({ obj }) => transformToRAuthenticityCheckList(obj.checks), { toClassOnly: true })
  @IsArray()
  checks: uRAuthenticityCheck[]

  /**
   * Create instance of RAuthenticityImageCheckListItem from plain object
   * @param {iRAuthenticityCheckGroup} input - plain object
   * @returns {RAuthenticityCheckGroup}
   */
  static fromPlain = (input: any): RAuthenticityCheckGroup => plainToInstance(RAuthenticityCheckGroup, input)
}
