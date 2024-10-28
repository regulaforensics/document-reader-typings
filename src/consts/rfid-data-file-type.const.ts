/**
* Enumeration contains a set of constants that define the file type
* (or logical belonging of the data object) within the context of the communication session
* with electronic document
* @type {eRfidDataFileType}
*/
export enum eRfidDataFileType {
  UNSPECIFIED = 0,
  PASSPORT_DG1 = 1,
  PASSPORT_DG2 = 2,
  PASSPORT_DG3 = 3,
  PASSPORT_DG4 = 4,
  PASSPORT_DG5 = 5,
  PASSPORT_DG6 = 6,
  PASSPORT_DG7 = 7,
  PASSPORT_DG8 = 8,
  PASSPORT_DG9 = 9,
  PASSPORT_DG10 = 10,
  PASSPORT_DG11 = 11,
  PASSPORT_DG12 = 12,
  PASSPORT_DG13 = 13,
  PASSPORT_DG14 = 14,
  PASSPORT_DG15 = 15,
  PASSPORT_DG16 = 16,
  PASSPORT_DG17 = 17,
  PASSPORT_DG18 = 18,
  PASSPORT_DG19 = 19,
  PASSPORT_DG20 = 20,
  PASSPORT_SOD = 21,
  PASSPORT_CVCA = 22,
  PASSPORT_COM = 23,
  DTC_DG17 = 57,
  DTC_DG18 = 58,
  DTC_DG22 = 62,
  DTC_DG23 = 63,
  DTC_DG24 = 64,
  ID_DG1 = 101,
  ID_DG2 = 102,
  ID_DG3 = 103,
  ID_DG4 = 104,
  ID_DG5 = 105,
  ID_DG6 = 106,
  ID_DG7 = 107,
  ID_DG8 = 108,
  ID_DG9 = 109,
  ID_DG10 = 110,
  ID_DG11 = 111,
  ID_DG12 = 112,
  ID_DG13 = 113,
  ID_DG14 = 114,
  ID_DG15 = 115,
  ID_DG16 = 116,
  ID_DG17 = 117,
  ID_DG18 = 118,
  ID_DG19 = 119,
  ID_DG20 = 120,
  ID_DG21 = 121,
  DL_COM = 150,
  DL_DG1 = 151,
  DL_DG2 = 152,
  DL_DG3 = 153,
  DL_DG4 = 154,
  DL_DG5 = 155,
  DL_DG6 = 156,
  DL_DG7 = 157,
  DL_DG8 = 158,
  DL_DG9 = 159,
  DL_DG10 = 160,
  DL_DG11 = 161,
  DL_DG12 = 162,
  DL_DG13 = 163,
  DL_DG14 = 164,
  DL_SOD = 165,
  DL_CE = 166,
  DL_CVCA = 167,
  PACE_CARD_ACCESS = 200,
  PACE_CARD_SECURITY = 201,
  PACE_CHIP_SECURITY = 202,
  MIFARE_DATA = 300,
  MIFARE_VALIDITY = 301,
  AUTHENTICITY_V2 = 302,
  ATR = 400,
  _E_SIGN_PK = 500,
  _E_SIGN_SIGNED_DATA = 501,
  CERTIFICATE = 600,
  MASTER_LIST = 601,
  DEFECT_LIST = 602,
  BLACK_LIST = 603,
  APP_DIRECTORY = 700,
  SESSION = 701,
  LOG_DATA = 702,
  CHIP_PROPERTIES = 703,
  POST_CA_RESPONSE = 710,
  POST_CA_PUBLIC_KEY = 711,
  POST_CA_INFO = 712,
  POST_CA_D_PARAMS = 713,
  POST_CA_CHECK_PK = 714,
  POST_CA_CHECK_SK = 715,
  USER_DEFINED = 1000,
}
