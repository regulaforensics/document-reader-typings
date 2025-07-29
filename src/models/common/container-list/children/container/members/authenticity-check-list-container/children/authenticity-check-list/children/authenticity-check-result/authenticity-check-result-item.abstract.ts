import { IsDefined, IsInt, IsEnum, IsOptional } from 'class-validator'
import { AuthenticityCheckResultItem } from '@regulaforensics/document-reader-webclient'

import { eAuthenticity, eCheckResult, eCheckDiagnose } from '@/consts'

export abstract class aAuthenticityCheckResultItem implements AuthenticityCheckResultItem {
  /**
   * Type of the performed check
   * @type {eAuthenticity}
   */
  @IsDefined()
  @IsEnum(eAuthenticity)
  Type: eAuthenticity

  /**
   * Element responsible for the results of the checks
   * @type {eCheckResult|undefined}
   */
  @IsOptional()
  @IsEnum(eCheckResult)
  ElementResult?: eCheckResult

  /**
   * Element with which errors are checked
   * @type {eCheckDiagnose|undefined}
   */
  @IsOptional()
  @IsEnum(eCheckDiagnose)
  ElementDiagnose?: eCheckDiagnose

  /**
   * @type {number|undefined}
   */
  @IsOptional()
  @IsInt()
  PercentValue?: number
}
