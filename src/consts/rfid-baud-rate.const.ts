/**
 * Enumeration contains a set of constants specifying the rate of data exchange between the reader and the RFID-chip
 * @enum {number}
 */
export enum eRfidBaudRate {
  /**
   * Unknown
   * @type {number}
   */
  UNKNOWN = 0x00,

  /**
   * 106 bits/s
   */
  RFBR_106 = 0x01,

  /**
   * 212 bits/s
   */
  RFBR_212 = 0x02,

  /**
   * 424 bits/s
   */
  RFBR_424 = 0x04,

  /**
   * 848 bits/s
   */
  RFBR_848 = 0x08,

  /**
   * 1695 bits/s
   */
  RFBR_1695 = 0x10,

  /**
   * 3390 bits/s
   */
  RFBR_3390 = 0x20,

  /**
   * 6780 bits/s
   */
  RFBR_6780 = 0x40,
}
