/**
* Enumeration contains identifiers determining bar-code module type
*/
export enum BarCodeModuleType {
  /**
  * Module contains text data
  */
  TEXT = 0,

  /**
  * Module contains byte data
  */
  BYTE = 1,

  /**
  * Module contains numeric data
  */
  NUM = 2,

  /**
  * Shifts in byte compaction mode (for PDF417)
  */
  SHIFT = 3,

  /**
  * Module contains any data
  */
  ALL = 4,
}
