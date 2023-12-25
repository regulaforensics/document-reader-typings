/**
* Enumeration containing identifiers determining bar-code data reading result.
*/
export enum BarCodeResultCodes {
  /**
  * No error
  */
  NO_ERR = 0,

  /**
  * Input argument/parameter is a null pointer error
  */
  NULL_PTR_ERR = -6001,

  /**
  * Function argument/parameter is bad error
  */
  BAD_ARG_ERR = -6002,

  /**
  * Wrong value of data size error
  */
  SIZE_ERR = -6003,

  /**
  * Bad values of any parameter range error
  */
  RANGE_ERR = -6004,

  /**
  * Internal program error
  */
  INTERNAL_ERR = -6005,

  /**
  * Try-except process error
  */
  TRY_EXCEPT_ERR = -6006,

  /**
  * Barcode detection error
  */
  BAR_CODE_NOT_FOUND = -6008,

  /**
  * Barcode decoding error
  */
  BAR_CODE_DECODE_ERR = -6010,

  /**
  * "ImageProcess.dll" connection error
  */
  NO_USER_DLL_FOUND = -6019,

  /**
  * IPP Dll connection error
  */
  NO_IPP_DLL_FOUND = -6020,

  /**
  * Run-time error in IPP-function
  */
  IPP_EXEC_ERR = -6024,

  /**
  * Try-except execution in IPP-function
  */
  IPP_TRY_EXCEPT_ERR = -6025,

  /**
  * Input data error for ImagProcess.dll
  */
  BARCODE_ERROR_INPUT_PARAM = -11001,

  /**
  * Initialization error for ImagProcess.dll
  */
  BARCODE_ERROR_F_INIT = -11006,

  /**
  * "IpDecode.dll" connection error for ImagProcess.dll
  */
  BARCODE_ERROR_NOT_LOAD_IP_DECODE_DLL = -11012,

  /**
  * Internal program error for ImagProcess.dll
  */
  BARCODE_ERROR_INNER_PROBLEM = -11100,

  /**
  * 1D-barcode decoding error for ImagProcess.dll
  */
  BARCODE_ERROR_DECODE_1D_BAD_DECODE = -11200,

  /**
  * Row or Column count computational error (PDF417) for ImagProcess.dll
  */
  BARCODE_ERROR_FIND_ROW_OR_COLUMN = -11201,

  /**
  * MinX computational error (PDF417) for ImagProcess.dll
  */
  BARCODE_ERROR_FIND_3X8_2D_X = -11202,

  /**
  * MinY computational error (PDF417) for ImagProcess.dll
  */
  BARCODE_ERROR_FIND_3X8_2D_Y = -11203,

  /**
  * Invalid barcode angle (> 3 degree) for ImagProcess.dll
  */
  BARCODE_ERROR_2D_UGOL_MAX = -11204,

  /**
  * The result may contain decoding errors for ImagProcess.dll
  */
  BARCODE_ERROR_INDEFINITELY_DECODED = -11210,

  /**
  * Dll initialization error for ImagProcess.dll
  */
  BARCODE_ERROR_DLL_NOT_INIT = -11300,

  /**
  * Try-except in IPDECODE function error for ImagProcess.dll
  */
  BARCODE_ERROR_IP_DECODE_DLL_TRY_EXCEPT = -11400,

  /**
  * Too many invalid code words error for IPDecode.dll
  */
  IP_DECODE_ERROR_LARGE_ERRORS = -4503,

  /**
  * Invalid number of columns error for IPDecode.dll
  */
  IP_DECODE_ERROR_FAULT_COLUMNS = -4504,

  /**
  * Invalid number of rows error for IPDecode.dll
  */
  IP_DECODE_ERROR_FAULT_ROWS = -4505,

  /**
  * Correction Level error for IPDecode.dll
  */
  IP_DECODE_ERROR_INCORRECT_ERROR_LEVEL = -4511,

  /**
  * Loading "DevTable.bin" error for IPDecode.dll
  */
  IP_DECODE_ERROR_LOADING_DEV_TABLE = -4512,
}
