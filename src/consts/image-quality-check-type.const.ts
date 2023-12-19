/**
* Enumeration contains possible values of input image quality check result type.
* @enum {number}
*/
export enum ImageQualityCheckType {
  /**
  * Glare presence on the image
  */
  IMAGE_GLARES = 0,

  /**
  * Image is in focus
  */
  IMAGE_FOCUS = 1,

  /**
  * If image resolution is below threshold
  */
  IMAGE_RESOLUTION = 2,

  /**
  * Image is colorless
  */
  IMAGE_COLORNESS = 3,

  /**
  * Document in the image has prespective distortion above threshold
  */
  PERSPECTIVE = 4,

  /**
  * If the whole document page is completely within the image
  */
  BOUNDS = 5,

  /**
  * If the image is captured from screen
  */
  SCREEN_CAPTURE = 6,

  /**
  * If the portrait is present
  */
  PORTRAIT = 7,

  /**
  * If the document contains handwritten text in the scanned fields
  */
  HANDWRITTEN = 8
}
