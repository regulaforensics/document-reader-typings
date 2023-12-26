/**
* Defining the geometric format of documents in accordance with ISO / IEC 7810
* @enum {number}
*/
export enum DocumentFormat {
  /**
  * Unknown document format
  */
  UNKNOWN = -1,

  /**
  * ID1 document format
  */
  ID1 = 0,

  /**
  * ID2 document format
  */
  ID2 = 1,

  /**
  * ID3 document format
  */
  ID3 = 2,

  /**
  * Undefined document format
  */
  NON = 3,

  /**
  * A4 document format
  */
  A4 = 4,

  /**
  * ID3 double document format
  */
  ID3_X2 = 5,

  /**
  * ID1 format document rotated 90 °
  */
  ID1_90 = 10,

  /**
  * ID1 format document rotated 180 °
  */
  ID1_180 = 11,

  /**
  * ID1 format document rotated 270 °
  */
  ID1_270 = 12,

  /**
  * ID2 format document rotated 90 °
  */
  ID2_180 = 13,

  /**
  * ID3 format document rotated 180 °
  */
  ID3_180 = 14,

  /**
  * Arbitrary format
  */
  CUSTOM = 1000,

  /**
  * Flexible format. Standard formats can be resized during cropping, depending on various factors: light, background...
  */
  FLEXIBLE = 1002
}
