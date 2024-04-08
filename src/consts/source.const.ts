/**
* Document data sources.
* @enum {string}
*/
export enum eSource {
  /**
  * Machine readable zone (MRZ)
  */
  MRZ = 'MRZ',

  /**
  * Visual zone
  */
  VISUAL = 'VISUAL',

  /**
  * Barcode
  */
  BARCODE = 'BARCODE',

  /**
  * RFID
  */
  RFID = 'RFID',

  /**
  * Magnetic
  */
  MAGNETIC = 'MAGNETIC',

  /**
  * External
  */
  EXTERNAL = 'EXTERNAL'
}
