import { IsDefined, IsEnum, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'

import { eCheckResult, eLCID } from '@/consts'
import { DocReaderTypeError } from '@/errors'


/**
* Name and surname, LCID and check result
* If check result is ERROR - value will be UNKNOWN and LCID will be 1033 (English - United States)
*/
export interface iRNameSurnameLCID {
  /**
  * Name and surname
  * @type {string}
  */
  value: string

  /**
  * Check result
  * @type {eCheckResult}
  */
  checkResult: eCheckResult

  /**
  * LCID
  * @type {eLCID}
  */
  lcid: eLCID
}

/**
* Name and surname, LCID and check result
* If check result is ERROR - value will be UNKNOWN and LCID will be 1033 (English - United States)
*/
export class RNameSurnameLCID implements iRNameSurnameLCID {
  /**
  * Name and surname
  * @type {string}
  */
  @IsDefined()
  @IsString()
  value: string

  /**
  * Check result
  * @type {eCheckResult}
  */
  @IsDefined()
  @IsEnum(eCheckResult)
  checkResult: eCheckResult

  /**
  * LCID
  * @type {eLCID}
  */
  @IsDefined()
  @IsEnum(eLCID)
  lcid: eLCID

  /**
  * Create new RNameSurnameLCID instance from plain object
  * @param {unknown} input - plain object
  * @returns {RNameSurnameLCID}
  */
  static fromPlain = (input: unknown): RNameSurnameLCID => plainToClass(RNameSurnameLCID, input)

  /**
  * Validate RNameSurnameLCID instance
  * @param {RNameSurnameLCID} input - instance to validate
  * @throws {DocReaderTypeError} - if the given instance is not valid
  * @returns {true | never}
  */
  static validate = (input: RNameSurnameLCID): true | never => {
    const errors = validateSync(input)

    if (errors.length) {
      throw new DocReaderTypeError('ProcessRequest validation error: the data received does not match model structure!', errors)
    }

    return true
  }
}
