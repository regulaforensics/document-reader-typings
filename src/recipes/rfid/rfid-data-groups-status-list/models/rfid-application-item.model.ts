import { plainToClass, Type } from 'class-transformer'
import { IsDefined, IsEnum, validateSync, ValidationError, ValidateNested } from 'class-validator'

import { eRfidApplicationType } from '@/consts'
import { iRRfidDataGroupStatusItem, RRfidDataGroupStatusItem } from './rfid-data-group-status-item.model'
import { AllowPrimitives } from '@/types'


/**
 * Rfid application item
 */
export interface iRRfidApplicationItem {
  /**
   * Application type
   * @type {eRfidApplicationType}
   */
  type: eRfidApplicationType

  /**
   * Groups
   * @type {iRRfidDataGroupStatusItem[]}
   */
  groups: iRRfidDataGroupStatusItem[]
}

/**
 * Rfid application item
 */
export class RRfidApplicationItem implements iRRfidApplicationItem {
  /**
   * Application type
   * @type {eRfidApplicationType}
   */
  @IsDefined()
  @IsEnum(eRfidApplicationType)
  type: eRfidApplicationType

  /**
   * Groups
   * @type {RRfidDataGroupStatusItem[]}
   */
  @IsDefined()
  @Type(() => RRfidDataGroupStatusItem)
  @ValidateNested({ each: true })
  groups: RRfidDataGroupStatusItem[]

  /**
   * Create instance of RRfidApplicationItem from plain object
   * @param {AllowPrimitives<iRRfidApplicationItem>} input - plain object
   * @returns {RRfidApplicationItem}
   */
  static fromPlain = (input: AllowPrimitives<iRRfidApplicationItem>): RRfidApplicationItem => plainToClass(RRfidApplicationItem, input)

  /**
   * Gets validation errors of RRfidApplicationItem
   * @param {RRfidApplicationItem} input - input data
   * @returns {ValidationError[]} - array of validation errors
   */
  static getValidationErrors = (input: RRfidApplicationItem): ValidationError[] => validateSync(input)
}
