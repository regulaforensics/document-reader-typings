export enum ImageQualityCheckType {
  /**
  * Signals glare presence on the image
  */
  ImageGlares = 0,
  /**
  * Signals whether image is in focus
  */
  ImageFocus = 1,
  /**
  * Signals if image resolution is below threshold
  */
  ImageResolution = 2,
  /**
  * Signals if image is colorless
  */
  ImageColorness = 3,
  /**
  * Signals if document in the image has prespective distortion above threshold
  */
  Perspective = 4,
  /**
  * Signals if document is not fully present in the image
  */
  Bounds = 5,
  /**
  * Signals if an image is captured from screen
  */
  ScreenCapture = 6,
  /**
  * Signals if the portrait is present
  */
  Portrait = 7
}
