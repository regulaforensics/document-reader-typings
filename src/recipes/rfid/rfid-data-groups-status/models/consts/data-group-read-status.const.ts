import { eRfidErrorCodes } from '@/consts'

export enum eDataGroupReadStatus {
  /**
   * Group exists but not read
   */
  NOT_PERFORMED = eRfidErrorCodes.RFID_Error_NotPerformed,

  /**
   * Group not exists
   */
  NOT_AVAILABLE = eRfidErrorCodes.RFID_Error_NotAvailable,

  /**
   * Read without errors
   */
  NO_ERROR = eRfidErrorCodes.RFID_Error_NoError,

  /**
   * Read with errors
   */
  FAILED = eRfidErrorCodes.RFID_Error_Failed,
}
