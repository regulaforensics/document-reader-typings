/**
* Enumeration contains a set of constants specifying the type of the RFIDchip from MIFARE® family
* (for chips of type «A»)
* @enum {number}
*/
export enum eRfidAChip {
  /**
  * Unknown
  */
  UNKNOWN = 0,

  /**
  * MIFARE® 1K
  */
  MIFARE_1K = 1,

  /**
  * MIFARE® 4K
  */
  MIFARE_4K = 2,

  /**
  * MIFARE® Ultralight
  */
  MIFARE_ULTRALIGHT = 3,

  /**
  * MIFARE® DESFire
  */
  MIFARE_DES_FIRE = 4,

  MifareProX = 5,
}
