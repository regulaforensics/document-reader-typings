import { IsBoolean, IsDefined, IsEnum, IsInt, IsString } from 'class-validator'
import { RfidCardPropertiesExt as iRfidCardPropertiesExt } from '@regulaforensics/document-reader-webclient'

import { eRfidAChip, eRfidBaudRate, eRfidType } from '@/consts'

/**
 * Structure is used to store extended information about the
 * characteristics of the RFID-chip located in the scope of the reader
 */
export class RfidCardPropertiesExt implements iRfidCardPropertiesExt {
  /**
   * The type of the RFID-chip
   * @type {eRfidType}
   */
  @IsDefined()
  @IsEnum(eRfidType)
  RFID_Type: eRfidType

  /**
   * Numeric Baudrate1 value in hexadecimal format (e.g. "0x0000000F")
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Baudrate1: string

  /**
   * Numeric Baudrate2 value in hexadecimal format
   * @type {string}
   */
  @IsDefined()
  @IsString()
  Baudrate2: string

  /**
   * Boolean Support_4 value
   * @type {boolean}
   */
  @IsDefined()
  @IsBoolean()
  Support_4: boolean

  /**
   * RFIDchip from MIFARE® family (for chips of type «A»)
   * @type {eRfidAChip}
   */
  @IsDefined()
  @IsEnum(eRfidAChip)
  ChipType_A: eRfidAChip

  /**
   * Sign of support for ISO/IEC 14443-3 data exchange protocol
   * @type {boolean}
   */
  @IsDefined()
  @IsBoolean()
  Support_Mifare: boolean

  /**
   * Amount of operational memory MIFARE® of the chip, kilobytes
   * @type {number}
   */
  @IsDefined()
  @IsInt()
  MifareMemory: number

  /**
   * UID contents in text format. Each byte is represented by its hexadecimal value. The individual bytes are separated
   * by spaces (e.g. "F9 4F 41 60")
   * @type {string}
   */
  @IsDefined()
  @IsString()
  UID: string

  /**
   * Reply of the «A» type chip to «REQA» command of ISO/IEC 14443-3
   * protocol (Answer To Request, Type A – ATQA) – for the internal use by
   * the main control library
   * @type {any}
   * @internal
   */
  @IsDefined()
  ATQ_A: any

  /**
   * Response of type-A RFID-chip to SELECT command of ISO/IEC 14443-
   * 3 protocol (Select Acknowledge, SAK).
   * @type {any}
   * @internal
   */
  @IsDefined()
  SAK: any

  /**
   * ATQ_B contents in text format. Each byte is represented by its hexadecimal value. The individual bytes are
   * separated by spaces (e.g. "50 F9 4F 41 60 00 00 00 00 77 81 81")
   * @type {any}
   * @internal
   */
  @IsDefined()
  ATQ_B: any

  /**
   * Indicating the established rate for data transmitting to the RFID-chip
   * @type {eRfidBaudRate}
   */
  @IsDefined()
  @IsEnum(eRfidBaudRate)
  BitRateS: eRfidBaudRate

  /**
   * Indicating the established rate for data receiving from the RFID-chip
   * @type {eRfidBaudRate}
   */
  @IsDefined()
  @IsEnum(eRfidBaudRate)
  BitRateR: eRfidBaudRate

  /**
   * ATR-string of RFID-chip
   * @type {string}
   */
  @IsDefined()
  @IsString()
  ATR: string
}

export type { iRfidCardPropertiesExt }
