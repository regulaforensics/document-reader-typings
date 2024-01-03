/**
* Enumeration representing RFID Data Group Types.
* Constants with prefix RFDGT_ correspond to the informational data groups of ePassport
* application, with prefix RFDGT_EID_ – those of eID application, with prefix RFDGT_EDL_ –
* eDL application
* @enum {number}
*/
export enum eRfidDataGroupTypeTag {
  /**
  * Common Data Group Type
  */
  RFDGT_COM = 0x60,

  /**
  * Data Group 1
  */
  RFDGT_DG1 = 0x61,

  /**
  * Data Group 2
  */
  RFDGT_DG2 = 0x75,

  /**
  * Data Group 3
  */
  RFDGT_DG3 = 0x63,

  /**
  * Data Group 4
  */
  RFDGT_DG4 = 0x76,

  /**
  * Data Group 5
  */
  RFDGT_DG5 = 0x65,

  /**
  * Data Group 6
  */
  RFDGT_DG6 = 0x66,

  /**
  * Data Group 7
  */
  RFDGT_DG7 = 0x67,

  /**
  * Data Group 8
  */
  RFDGT_DG8 = 0x68,

  /**
  * Data Group 9
  */
  RFDGT_DG9 = 0x69,

  /**
  * Data Group 10
  */
  RFDGT_DG10 = 0x6A,

  /**
  * Data Group 11
  */
  RFDGT_DG11 = 0x6B,

  /**
  * Data Group 12
  */
  RFDGT_DG12 = 0x6C,

  /**
  * Data Group 13
  */
  RFDGT_DG13 = 0x6D,

  /**
  * Data Group 14
  */
  RFDGT_DG14 = 0x6E,

  /**
  * Data Group 15
  */
  RFDGT_DG15 = 0x6F,

  /**
  * Data Group 16
  */
  RFDGT_DG16 = 0x70,

  /**
  * Start of Data
  */
  RFDGT_SOD = 0x77,

  /**
  * Extended Interoperable Data, Data Group 1
  */
  RFDGT_EID_DG1 = 0x61,

  /**
  * Extended Interoperable Data, Data Group 2
  */
  RFDGT_EID_DG2 = 0x62,

  /**
  * Extended Interoperable Data, Data Group 3
  */
  RFDGT_EID_DG3 = 0x63,

  /**
  * Extended Interoperable Data, Data Group 4
  */
  RFDGT_EID_DG4 = 0x64,

  /**
  * Extended Interoperable Data, Data Group 5
  */
  RFDGT_EID_DG5 = 0x65,

  /**
  * Extended Interoperable Data, Data Group 6
  */
  RFDGT_EID_DG6 = 0x66,

  /**
  * Extended Interoperable Data, Data Group 7
  */
  RFDGT_EID_DG7 = 0x67,

  /**
  * Extended Interoperable Data, Data Group 8
  */
  RFDGT_EID_DG8 = 0x68,

  /**
  * Extended Interoperable Data, Data Group 9
  */
  RFDGT_EID_DG9 = 0x69,

  /**
  * Extended Interoperable Data, Data Group 10
  */
  RFDGT_EID_DG10 = 0x6A,

  /**
  * Extended Interoperable Data, Data Group 11
  */
  RFDGT_EID_DG11 = 0x6B,

  /**
  * Extended Interoperable Data, Data Group 12
  */
  RFDGT_EID_DG12 = 0x6C,

  /**
  * Extended Interoperable Data, Data Group 13
  */
  RFDGT_EID_DG13 = 0x6D,

  /**
  * Extended Interoperable Data, Data Group 14
  */
  RFDGT_EID_DG14 = 0x6E,

  /**
  * Extended Interoperable Data, Data Group 15
  */
  RFDGT_EID_DG15 = 0x6F,

  /**
  * Extended Interoperable Data, Data Group 16
  */
  RFDGT_EID_DG16 = 0x70,

  /**
  * Extended Interoperable Data, Data Group 17
  */
  RFDGT_EID_DG17 = 0x71,

  /**
  * Extended Interoperable Data, Data Group 18
  */
  RFDGT_EID_DG18 = 0x72,

  /**
  * Extended Interoperable Data, Data Group 19
  */
  RFDGT_EID_DG19 = 0x73,

  /**
  * Extended Interoperable Data, Data Group 20
  */
  RFDGT_EID_DG20 = 0x74,

  /**
  * Extended Interoperable Data, Data Group 21
  */
  RFDGT_EID_DG21 = 0x75,

  /**
  * Extended Length Data, Common Data Group Type
  */
  RFDGT_EDL_COM = 0x60,

  /**
  * Extended Length Data, Start of Data
  */
  RFDGT_EDL_SOD = 0x77,

  /**
  * Extended Length Data, Certificate Holder Authorization
  */
  RFDGT_EDL_CE = 0x77,

  /**
  * Extended Length Data, Data Group 1
  */
  RFDGT_EDL_DG1 = 0x61,

  /**
  * Extended Length Data, Data Group 2
  */
  RFDGT_EDL_DG2 = 0x6B,

  /**
  * Extended Length Data, Data Group 3
  */
  RFDGT_EDL_DG3 = 0x6C,

  /**
  * Extended Length Data, Data Group 4
  */
  RFDGT_EDL_DG4 = 0x65,

  /**
  * Extended Length Data, Data Group 5
  */
  RFDGT_EDL_DG5 = 0x67,

  /**
  * Extended Length Data, Data Group 6
  */
  RFDGT_EDL_DG6 = 0x75,

  /**
  * Extended Length Data, Data Group 7
  */
  RFDGT_EDL_DG7 = 0x63,

  /**
  * Extended Length Data, Data Group 8
  */
  RFDGT_EDL_DG8 = 0x76,

  /**
  * Extended Length Data, Data Group 9
  */
  RFDGT_EDL_DG9 = 0x70,

  /**
  * Extended Length Data, Data Group 11
  */
  RFDGT_EDL_DG11 = 0x6D,

  /**
  * Extended Length Data, Data Group 12
  */
  RFDGT_EDL_DG12 = 0x71,

  /**
  * Extended Length Data, Data Group 13
  */
  RFDGT_EDL_DG13 = 0x6F,

  /**
  * Extended Length Data, Data Group 14
  */
  RFDGT_EDL_DG14 = 0x6E,
}

