/**
* Enumeration contains a set of error codes returned by the MCL functions or transferred to the user application by
* the callback-function.
* @enum {number}
*/
export enum eRfidErrorCodes {
  /**
  * Successful operation.
  */
  ERROR_NO_ERROR = 0x00000001,

  /**
  * Requested operation has already been performed.
  */
  ERROR_ALREADY_DONE = 0x00000002,

  /**
  * Error of operation execution (common case).
  */
  ERROR_FAILED = 0xffffffff,

  /**
  * RFID-chip is absent in the scope of the reader antenna.
  */
  ERROR_NO_CHIP_DETECTED = 0x80010001,

  /**
  * Requested operation unavailable.
  */
  ERROR_NOT_AVAILABLE = 0x80010002,

  /**
  * Incorrect command parameter
  */
  ERROR_INVALID_PARAMETER = 0x80010004,

  /**
  * SDK control library was not initialized.
  */
  ERROR_NOT_INITIALIZED = 0x80010005,

  /**
  * Insufficient memory for command execution.
  */
  ERROR_NOT_ENOUGH_MEMORY = 0x80010006,

  /**
  * Insufficient data for command execution.
  */
  ERROR_NOT_ENOUGH_DATA = 0x80010007,

  /**
  * Incorrect directory name.
  */
  ERROR_INVALID_DIRECTORY = 0x80010008,

  /**
  * Unknown command
  */
  ERROR_UNKNOWN_COMMAND = 0x80010009,

  /**
  * File input/output error.
  */
  ERROR_FILE_IO_ERROR = 0x8001000A,

  /**
  * SDK control library is busy. Execution of the command is impossible. SDK control library is
  * busy. Execution of the command is impossible.
  */
  ERROR_BUSY = 0x8001000B,

  /**
  * It is required to update reader’s firmware
  */
  ERROR_OLD_FIRMWARE = 0x8001000C,

  /**
  * Error of command of data exchange with RFID-chip execution (common case)
  */
  ERROR_PCSC_FAILED = 0x80020000,

  /**
  * RFID-chip reader unavailable.
  */
  ERROR_PCSC_READER_NOT_AVAILABLE = 0x80020001,

  /**
  * Failed to connect with RFID-chip.
  */
  ERROR_PCSC_CANT_CONNECT_CARD = 0x80020002,

  /**
  * No active RFID-chip.
  */
  ERROR_PCSC_CARD_IS_NOT_CONNECTED = 0x80020003,

  /**
  * Data reading operation cancelled by the user.
  */
  ERROR_PCSC_OPERATION_CANCELLED = 0x80020004,

  /**
  * Data exchange with RFID-chip takes place. Execution of the command is impossible.
  */
  ERROR_PCSC_CARD_IS_BUSY = 0x80020005,

  /**
  * Error of SCard service when data exchanging with RFID-chip.
  */
  ERROR_PCSC_FAILED_SCARD = 0x80020006,

  /**
  * Error of executing command of extended length reading. Full reinitialization of RFID-chip is required.
  */
  ERROR_PCSC_EXT_LE_FAILED = 0x80020010,

  /**
  * Secure communication channel organization is required to access data
  */
  LAYER6_SECURITY_MANAGER = 0x86000000,

  /**
  * Error of executing APDU-command of Master File or application selection
  */
  LAYER6_APP_SELECTION_FAILURE = 0x86000001,

  /**
  * Error of the cryptogram checksum validation during BAC procedure
  */
  LAYER6_MUTUAL_AUTH_MAC_FAIL = 0x86000100,

  /**
  * Error of the cryptogram validation during BAC
  */
  LAYER6_MUTUAL_AUTH_ENC_FAIL = 0x86000101,

  /**
  * One of the errors of the APDU-commands:
  * 1) Mutual Authenticate – performing the BAC;
  * 2) General Authenticate – at the 4th step of PACE performance;
  * 3) General Authenticate – performing the CA.
  */
  LAYER6_MUTUAL_AUTH_FAILURE = 0x86000102,

  /**
  * When executing the MUTUAL AUTHENTICATION APDU command when implementing a
  * PACE scheme other than PACE-CAM, the response from the chip contains a forbidden in this
  * case data object 0x8A
  */
  LAYER6_MUTUAL_AUTH_FAILURE_DATA = 0x86000103,

  /**
  * Absence of the checksum in the protected APDU-response from the RFID-chip (SM ‘8E’ data object)
  */
  LAYER6_SM_DO8E_MISSING = 0x86000200,

  /**
  * Absence of the data padding object in the protected APDU-response from the RFID-chip
  * (SM ‘87’ data object)
  */
  LAYER6_SM_DO87_MISSING = 0x86000201,

  /**
  * Absence of the command execution status in the protected APDU-response from the RFIDchip (SM ‘99’ data object)
  */
  LAYER6_SM_DO99_MISSING = 0x86000202,

  /**
  * Error of the checksum validation of the protected APDU-response from the RFID-chip
  */
  LAYER6_SM_MAC_INCORRECT = 0x86000203,

  /**
  * Incorrect contents of the data padding object in the protected APDU-response from the
  * RFID-chip (SM ‘87’ data object )
  */
  LAYER6_SM_DO87_INCORRECT = 0x86000204,

  /**
  * Response to Read Binary APDU-command, using ‘B1’ parameter for file data reading
  * with an offset >32767, is not represented in the TLV-format.
  */
  LAYER6_NON_TLV_RESPONSE_DATA = 0x86000300,

  LAYER6_GET_CHALLENGE_FAILURE = 0x86000307,

  /**
  * Incorrect length of the data received as a result of Get Challenge APDU-command execution
  */
  LAYER6_WRONG_RND_ICC_LENGTH = 0x86000301,

  /**
  * Error of Internal Authenticate APDU-command execution when performing AA procedure
  */
  LAYER6_INT_AUTH_FAILURE = 0x86000302,

  /**
  * Error of MSE:Set KAT APDU-command execution when performing CA procedure, version 1
  */
  FID_LAYER6_MSE_SET_KAT_FAILURE = 0x86000303,

  /**
  * Error of MSE:Set DST APDU-command execution when performing TA procedure
  */
  LAYER6_MSE_SET_DST_FAILURE = 0x86000304,

  /**
  * Error of PSO:Verify Certificate APDU-command execution when performing TA procedure
  */
  LAYER6_PSO_CERTIFICATE_FAILURE = 0x86000305,

  /**
  * Error of MSE:Set AT APDU-command execution when performing the procedures:
  * 1) PACE;
  * 2) TA;
  * 3) CA version 2;
  * 4) RI.
  */
  LAYER6_MSE_SET_AT_FAILURE = 0x86000306,

  /**
  * Error of External Authenticate APDU-command execution when performing TA procedure
  */
  LAYER6_EXT_AUTH_FAILURE = 0x86000308,

  /**
  * Error of General Authenticate APDU-command execution [30] when performing
  * PACE procedure at steps 1–3
  */
  LAYER6_GENERAL_AUTH_FAILURE = 0x86000309,

  /**
  * File not found. ‘6A 82’ status code of APDU-command execution
  */
  LAYER6_FILE_NOT_FOUND = 0x80006A82,

  /**
  * Attempt of reading outside the end of the file. ‘62 82’ status code of APDU-command execution
  */
  LAYER6_FILE_EOF1 = 0x80006282,

  /**
  * Attempt of reading outside the file end of the. ‘6B 00’ status code of APDU-command execution
  */
  LAYER6_FILE_EOF2 = 0x80006B00,

  /**
  * Error of the execution of MSE:Set AT (variants of appearance – see LAYER6_MSE_SET_AT_FAILURE description) or
  * General Authenticate (variants of appearance – see LAYER6_GENERAL_AUTH_FAILURE description).
  * Possible values in the context of command using
  * 1) the terminal does not support use of the selected type of password;
  * 2) the selected algorithm is not supported;
  * 3) initialization error.
  */
  LAYER6_INCORRECT_PARAMS = 0x80006A80,

  /**
  * Unavailable data, pointed to by the APDU-command parameters.
  */
  LAYER6_NO_REFERENCE_DATA = 0x80006A88,

  /**
  * Error of the execution of MSE:Set AT (when performing PACE) or General Authenticate (variants of appearance are
  * analogue to LAYER6_GENERAL_AUTH_FAILURE).
  * It means that the selected password is suspended. It is required to perform a procedure of
  * password resuming.
  */
  LAYER6_PWD_SUSPENDED = 0x800063C1,

  /**
  * Error of the execution of MSE:Set AT (when performing PACE) or General Authenticate (variants of appearance are
  * analogue to LAYER6_GENERAL_AUTH_FAILURE).
  * It means that the selected password is blocked. It is required to perform a procedure of
  * password unblocking.
  */
  LAYER6_PWD_BLOCKED = 0x800063C0,

  /**
  * Error of the execution of MSE:Set AT (when performing PACE). It means that the selected
  * password is deactivated. It is required to perform a procedure of password activation.
  */
  LAYER6_PWD_DEACTIVATED = 0x80006283,

  /**
  * Error of the execution of General Authenticate APDU-command or commands of work with eSign application.
  * It means that the selected password is blocked. It is required to perform procedure of password unblocking
  */
  LAYER6_PWD_BLOCKED_2 = 0x80006983,

  /**
  * Error of the execution of General Authenticate APDU-command when performing PACE procedure or commands of work
  * with eSign application. It means that the selected password is deactivated. It is required to perform procedure
  * of password activation.
  */
  LAYER6_PWD_DEACTIVATED_2 = 0x80006984,

  /**
  * Error of General Authenticate APDU-command execution when performing PACE.
  * It means that the selected password is suspended. It is required to perform procedure of password resuming.
  */
  LAYER6_PWD_SUSPENDED_2 = 0x80006985,

  /**
  * Error of the execution of MSE:Set AT when performing PACE procedure or General Authenticate (variants
  * of appearance are analogue to LAYER6_GENERAL_AUTH_FAILURE). It means that incorrect password value has
  * been used. Low order 8 bits of code contain the remaining number of attempts for this
  * password. The user application may try to repeat an attempt of performing the required
  * procedure with other values.
  */
  LAYER6_PWD_FAILED = 0x801063C0,

  /**
  * Operation was not performed.
  */
  ERROR_NOT_PERFORMED = 0x83000000,

  /**
  * Session closed, operation impossible.
  */
  ERROR_SESSION_IS_CLOSED = 0x83000001,

  /**
  * Operation is not supported by the current type of terminal.
  */
  ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION = 0x83000002,

  /**
  * Unknown type of terminal
  */
  ERROR_SESSION_TERMINAL_TYPE_UNKNOWN = 0x83000010,

  /**
  * Error of reading or analysis of the terminal certificate data
  */
  ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE = 0x83000011,

  /**
  * Terminal type was not defined for the current session
  */
  ERROR_SESSION_TERMINAL_TYPE_NOT_SET = 0x83000012,

  /**
  * Unknown authentication procedure type
  */
  ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN = 0x83000013,

  /**
  * Defined type terminal does not support this type of procedure
  */
  ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED = 0x83000014,

  /**
  * Type of authentication procedure was not set for the current session
  */
  ERROR_SESSION_PROCEDURE_TYPE_NOT_SET = 0x83000015,

  /**
  * Unknown access key type
  */
  ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE = 0x83000016,

  /**
  * Unsupported type of secure data access procedure
  */
  ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE = 0x83000017,

  /**
  * Secure data access procedure does not allow to use the given key type
  */
  ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE = 0x83000018,

  /**
  * Key type is not supported by the current terminal type, or the rights to its use are insufficient.
  */
  ERROR_SESSION_ACCESS_KEY_RESTRICTED = 0x83000019,

  /**
  * Incorrect key contents (empty or zero string)
  */
  ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA = 0x8300001A,

  /**
  * Secure data access key was not set for the current session
  */
  ERROR_SESSION_ACCESS_KEY_NOT_SET = 0x8300001B,

  /**
  * Operation of password management is not authorized for the current terminal type.
  */
  ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED = 0x8300001C,

  /**
  * Unknown type of the procedure of authentication or secure data access.
  */
  ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE = 0x83000020,

  /**
  * Preliminary opening of the secure data access session is required (PACE or BAC).
  */
  ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM = 0x83000021,

  /**
  * Preliminary opening of the secure data access session is required (PACE).
  */
  ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE = 0x83000022,

  /**
  * Execution of TA preliminary step (for version 2) is required – computing CA ephemeral public keys.
  */
  ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS = 0x83000023,

  /**
  * Preliminary TA procedure is required.
  */
  ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA = 0x83000024,

  /**
  * Preliminary CA procedure is required.
  */
  ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA = 0x83000025,

  /**
  * Discrepancy between the selected CA variant on the preliminary and main stages.
  */
  ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA = 0x83000026,

  /**
  * CA procedure failed.
  */
  ERROR_SESSION_ACCESS_CONTROL_CA_FAILED = 0x83000027,

  /**
  * TA procedure failed.
  */
  ERROR_SESSION_ACCESS_CONTROL_TA_FAILED = 0x83000028,

  /**
  * AA procedure failed.
  */
  ERROR_SESSION_ACCESS_CONTROL_AA_FAILED = 0x83000029,

  /**
  * RI procedure failed.
  */
  ERROR_SESSION_ACCESS_CONTROL_RI_FAILED = 0x8300002A,

  /**
  * Document security object digital signature verification failed
  */
  ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED = 0x83000030,

  /**
  * Informational data group integrity verification failed
  */
  ERROR_SESSION_PA_HASH_CHECK_FAILED = 0x83000031,

  /**
  * Verification of auxiliary data (date of expiry) failed
  */
  ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY = 0x83000040,

  /**
  * Verification of auxiliary data (age) failed
  */
  ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH = 0x83000041,

  /**
  * Verification of auxiliary data (Community ID) failed
  */
  ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID = 0x83000042,

  /**
  * Selection of eSign application is required to access its functionality
  */
  ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION = 0x83000050,

  /**
  * It is required to set the value of eSign-PIN for the current session
  */
  ERROR_SESSION_E_SIGN_PIN_NOT_SET = 0x83000051,

  /**
  * It is required to execute verification of eSign-PIN for the current session
  */
  ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED = 0x83000052,

  /**
  * Incorrect session object data
  */
  ERROR_SESSION_INCORRECT_DATA = 0x83000060,

  /**
  * No sufficient data for creation of the file contents ASN.1 object.
  */
  ERROR_SESSION_FILE_NOT_ENOUGH_DATA = 0x83010000,

  /**
  * Incorrect data of the file contents ASN.1 object.
  */
  ERROR_SESSION_FILE_INCORRECT_DATA = 0x83020000,

  /**
  * Incompliance of the structure of the file contents ASN.1 object with the structure given in
  * the respective specification.
  */
  ERROR_SESSION_FILE_UNEXPECTED_DATA = 0x83030000,

  /**
  * Incompliance of the structure of the formed ASN.1-objects with the requirements of specification
  * (in the context of specific file).
  */
  ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA = 0x83040000,

  /**
  * Incorrect value of the data group tag.
  */
  ERROR_SESSION_FILE_WRONG_TAG = 0x83050000,

  /**
  * Use of the read data is impossible
  */
  ERROR_SESSION_FILE_CANT_USE_DATA = 0x83060000,

  /**
  * Error of physical data reading.
  */
  ERROR_SESSION_FILE_CANT_READ_DATA = 0x83070000,

  /**
  * Error of access to the protected data groups.
  */
  ERROR_SESSION_FILE_ACCESS_DENIED = 0x83080000
}
