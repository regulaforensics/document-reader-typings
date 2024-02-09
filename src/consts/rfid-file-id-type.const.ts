/**
* Enumeration contains a set of constants that define the type of file
* identifier and its addressing (selection) method
* @enum {number}
*/
export enum eRfidFileIdType {
  /**
  * Not defined
  */
  UNDEFINED = 0,

  /**
  * Full, with Master File prefix (‘3F 00’);
  */
  MF_FULL_NAME = 1,

  /**
  * Short, relative to Master File;
  */
  MF_SHORT_NAME = 2,

  /**
  * Full, relative to the current application
  */
  DF_FULL_NAME = 3,

  /**
  * Short, addressing relative to the current application
  */
  DF_SHORT_NAME = 4,

  /**
  * Full, relative to the current application, file data reading is not performed.
  */
  LOCAL_PATH = 5,
}
