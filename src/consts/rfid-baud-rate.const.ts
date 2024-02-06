/**
* Enumeration contains a set of constants specifying the rate of data exchange between the reader and the RFID-chip
* @enum {number}
*/
export enum eRfidBaudRate {
  /**
  * 106 bits/s
  */
  RFBR_106 = 0X01,

  /**
  * 212 bits/s
  */
  RFBR_212 = 0X02,

  /**
  * 424 bits/s
  */
  RFBR_424 = 0X04,

  /**
  * 848 bits/s
  */
  RFBR_848 = 0X08,
}
