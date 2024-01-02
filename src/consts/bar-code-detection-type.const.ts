/**
* Enumeration representing the type of the detected bar-code.
* @enum {number}
*/
export enum BarCodeDetectionType {
  /**
  * Linear (one-dimensional) bar-code
  */
  LINEAR = 1,

  /**
  * 2-dimensional bar-code (PDF417)
  */
  TWO_DIMENSIONAL = 2,
}
