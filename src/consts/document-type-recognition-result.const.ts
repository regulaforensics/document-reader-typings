export enum DocumentTypeRecognitionResult {
  /**
  * Document type determined. The first element in candidates array is recognition result
  */
  OK = 0,
  /**
  * Document type was not determined. Ongoing processing is not possible
  */
  UNKNOWN = 15,
  /**
  * To determine document type user should provide more images with different light sources (UV, for example)
  */
  NEED_MORE_IMAGES = 29
}
