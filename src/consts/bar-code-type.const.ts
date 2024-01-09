/**
* Enumeration representing various bar-code types.
* @enum {number}
*/
export enum eBarCodeType {
  /**
  * Unknown type
  */
  UNKNOWN = 0,

  /**
  * One-dimensional bar-code, ISO 15417 (ANSI/AIM BC4-1999 Code 128)
  */
  CODE128 = 1,

  /**
  * One-dimensional bar-code, ISO 16388 (ANSI/AIM BC1-1995 Code 39)
  */
  CODE39 = 2,

  /**
  * One-dimensional bar-code, EAN8, ISO 15418
  */
  EAN8 = 3,

  /**
  * One-dimensional bar-code, Interleaved 2 of 5, ISO 16390 (ANSI/AIM BC2-1995 Interleaved 2 of 5)
  */
  ITF = 4,

  /**
  * Two-dimensional bar-code, ISO 15438 (AIM USS PDF417)
  */
  PDF417 = 5,

  /**
  * One-dimensional bar-code, Standard 2 of 5 (Industrial)
  */
  STF = 6,

  /**
  * One-dimensional bar-code, Matrix 2 of 5
  */
  MTF = 7,

  /**
  * One-dimensional bar-code, IATA 2 of 5 (Airline)
  */
  IATA = 8,

  /**
  * One-dimensional bar-code, (ANSI/AIM BC3-1995, USS - Codabar)
  */
  CODABAR = 9,

  /**
  * One-dimensional bar-code, UPC-A
  */
  UPCA = 10,

  /**
  * One-dimensional bar-code, (ANSI/AIM BC5-1995, USS - Code 93)
  */
  CODE93 = 11,

  /**
  * One-dimensional bar-code, UPC-E
  */
  UPCE = 12,

  /**
  * One-dimensional bar-code, EAN13, ISO 15418
  */
  EAN13 = 13,

  /**
  * Two-dimensional QRCODE bar-code
  */
  QRCODE = 14,

  /**
  * Two-dimensional AZTEC bar-code
  */
  AZTEC = 15,

  /**
  * Two-dimensional DATAMATRIX bar-code
  */
  DATAMATRIX = 16,

  /**
  * Type for internal use, representing all 1D bar-codes
  */
  ALL_1D = 17,

  /**
  * One-dimensional bar-code CODE11
  */
  CODE11 = 18,

  /**
  * JAB code
  */
  JABCODE = 19,

  /**
  * For internal use
  * @internal
  */
  END = 20,
}
