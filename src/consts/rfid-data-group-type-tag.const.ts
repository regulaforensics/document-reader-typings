/**
* Enumeration representing RFID Data Group Types.
* Constants with prefix  correspond to the informational data groups of ePassport
* application, with prefix EID_ – those of eID application, with prefix EDL_ –
* eDL application
* @enum {number}
*/
export enum eRfidDataGroupTypeTag {
  /**
  * Common Data Group Type
  */
  COM = 0x60,

  /**
  * Data Group 1
  */
  DG1 = 0x61,

  /**
  * Data Group 2
  */
  DG2 = 0x75,

  /**
  * Data Group 3
  */
  DG3 = 0x63,

  /**
  * Data Group 4
  */
  DG4 = 0x76,

  /**
  * Data Group 5
  */
  DG5 = 0x65,

  /**
  * Data Group 6
  */
  DG6 = 0x66,

  /**
  * Data Group 7
  */
  DG7 = 0x67,

  /**
  * Data Group 8
  */
  DG8 = 0x68,

  /**
  * Data Group 9
  */
  DG9 = 0x69,

  /**
  * Data Group 10
  */
  DG10 = 0x6A,

  /**
  * Data Group 11
  */
  DG11 = 0x6B,

  /**
  * Data Group 12
  */
  DG12 = 0x6C,

  /**
  * Data Group 13
  */
  DG13 = 0x6D,

  /**
  * Data Group 14
  */
  DG14 = 0x6E,

  /**
  * Data Group 15
  */
  DG15 = 0x6F,

  /**
  * Data Group 16
  */
  DG16 = 0x70,

  /**
  * Start of Data
  */
  SOD = 0x77,

  /**
  * Extended Interoperable Data, Data Group 1
  */
  EID_DG1 = 0x61,

  /**
  * Extended Interoperable Data, Data Group 2
  */
  EID_DG2 = 0x62,

  /**
  * Extended Interoperable Data, Data Group 3
  */
  EID_DG3 = 0x63,

  /**
  * Extended Interoperable Data, Data Group 4
  */
  EID_DG4 = 0x64,

  /**
  * Extended Interoperable Data, Data Group 5
  */
  EID_DG5 = 0x65,

  /**
  * Extended Interoperable Data, Data Group 6
  */
  EID_DG6 = 0x66,

  /**
  * Extended Interoperable Data, Data Group 7
  */
  EID_DG7 = 0x67,

  /**
  * Extended Interoperable Data, Data Group 8
  */
  EID_DG8 = 0x68,

  /**
  * Extended Interoperable Data, Data Group 9
  */
  EID_DG9 = 0x69,

  /**
  * Extended Interoperable Data, Data Group 10
  */
  EID_DG10 = 0x6A,

  /**
  * Extended Interoperable Data, Data Group 11
  */
  EID_DG11 = 0x6B,

  /**
  * Extended Interoperable Data, Data Group 12
  */
  EID_DG12 = 0x6C,

  /**
  * Extended Interoperable Data, Data Group 13
  */
  EID_DG13 = 0x6D,

  /**
  * Extended Interoperable Data, Data Group 14
  */
  EID_DG14 = 0x6E,

  /**
  * Extended Interoperable Data, Data Group 15
  */
  EID_DG15 = 0x6F,

  /**
  * Extended Interoperable Data, Data Group 16
  */
  EID_DG16 = 0x70,

  /**
  * Extended Interoperable Data, Data Group 17
  */
  EID_DG17 = 0x71,

  /**
  * Extended Interoperable Data, Data Group 18
  */
  EID_DG18 = 0x72,

  /**
  * Extended Interoperable Data, Data Group 19
  */
  EID_DG19 = 0x73,

  /**
  * Extended Interoperable Data, Data Group 20
  */
  EID_DG20 = 0x74,

  /**
  * Extended Interoperable Data, Data Group 21
  */
  EID_DG21 = 0x75,

  /**
  * Extended Length Data, Common Data Group Type
  */
  EDL_COM = 0x60,

  /**
  * Extended Length Data, Start of Data
  */
  EDL_SOD = 0x77,

  /**
  * Extended Length Data, Certificate Holder Authorization
  */
  EDL_CE = 0x77,

  /**
  * Extended Length Data, Data Group 1
  */
  EDL_DG1 = 0x61,

  /**
  * Extended Length Data, Data Group 2
  */
  EDL_DG2 = 0x6B,

  /**
  * Extended Length Data, Data Group 3
  */
  EDL_DG3 = 0x6C,

  /**
  * Extended Length Data, Data Group 4
  */
  EDL_DG4 = 0x65,

  /**
  * Extended Length Data, Data Group 5
  */
  EDL_DG5 = 0x67,

  /**
  * Extended Length Data, Data Group 6
  */
  EDL_DG6 = 0x75,

  /**
  * Extended Length Data, Data Group 7
  */
  EDL_DG7 = 0x63,

  /**
  * Extended Length Data, Data Group 8
  */
  EDL_DG8 = 0x76,

  /**
  * Extended Length Data, Data Group 9
  */
  EDL_DG9 = 0x70,

  /**
  * Extended Length Data, Data Group 11
  */
  EDL_DG11 = 0x6D,

  /**
  * Extended Length Data, Data Group 12
  */
  EDL_DG12 = 0x71,

  /**
  * Extended Length Data, Data Group 13
  */
  EDL_DG13 = 0x6F,

  /**
  * Extended Length Data, Data Group 14
  */
  EDL_DG14 = 0x6E,
}

