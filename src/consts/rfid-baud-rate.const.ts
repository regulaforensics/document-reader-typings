/**
* Enumeration contains a set of constants specifying the rate of data exchange between the reader and the RFID-chip
* @enum {number}
*/
export enum eRfidBaudRate {
  /**
  * Unknown
  * @type {number}
  */
  UNKNOWN = 0X00,

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

  /**
   * 1695 bits/s
   */
  RFBR_1695 = 0X10,

  /**
   * 3390 bits/s
   */
  RFBR_3390 = 0X20,

  /**
   * 6780 bits/s
   */
  RFBR_6780 = 0X40,
}
