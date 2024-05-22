/**
* Enumeration contains a flag of visibility of the security element in IR range.
* @enum {number}
*/
export enum eIRVisibilityFlag {
  /**
  * Invisible
  */
  INVISIBLE = 0,

  /**
  * Visible
  */
  VISIBLE = 1,

  /**
  * Colored
  */
  COLORED = 2,

  /**
  * Grayscale
  */
  GRAYSCALE = 4,

  /**
  * Visible vs IR match
  */
  WHITE_IR_MATCHING = 8
}
