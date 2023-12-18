/**
* Enumeration contains identifiers determining the logical type of
* the graphic data obtained while reading document filling fields or bar-codes
* @enum {number}
*/
export enum GraphicFieldType {
  /**
  * Document holder photo
  */
  PORTRAIT = 201,

  /**
  * Fingerprint of document holder
  */
  FINGERPRINT = 202,

  /**
  * Image of the iris of document holder
  */
  EYE = 203,

  /**
  * Signature of document holder
  */
  SIGNATURE = 204,

  /**
  * Barcode image
  */
  BAR_CODE = 205,

  /**
  * Image of document confirming owner citizenship
  */
  PROOF_OF_CITIZENSHIP = 206,

  /**
  * Cropped and rotated with perspective compensation (front side) of a document. Single input image can contain multiple document side/pages, which will be returned as separated results. Most coordinates in other types defined on that image.
  */
  DOCUMENT_FRONT = 207,

  /**
  * Image of the rear side of the document
  */
  DOCUMENT_REAR = 208,

  /**
  * Area with dynamic color change
  */
  COLOR_DYNAMIC = 209,

  /**
  * Additional Portrait
  */
  GHOST_PORTRAIT = 210,

  /**
  * Stamp
  */
  STAMP = 211,

  /**
  * Undefined image type
  */
  OTHER = 250,

  /**
  * Fingerprint (thumb, left hand)
  */
  FINGER_LEFT_THUMB = 300,

  /**
  * Fingerprint (index, left hand)
  */
  FINGER_LEFT_INDEX = 301,

  /**
  * Fingerprint (middle, left hand)
  */
  FINGER_LEFT_MIDDLE = 302,

  /**
  * Fingerprint (ring, left hand)
  */
  FINGER_LEFT_RING = 303,

  /**
  * Fingerprint (little, left hand)
  */
  FINGER_LEFT_LITTLE = 304,

  /**
  * Fingerprint (thumb, right hand)
  */
  FINGER_RIGHT_THUMB = 305,

  /**
  * Fingerprint (index, right hand)
  */
  FINGER_RIGHT_INDEX = 306,

  /**
  * Fingerprint (middle, right hand)
  */
  FINGER_RIGHT_MIDDLE = 307,

  /**
  * Fingerprint (ring, right hand)
  */
  FINGER_RIGHT_RING = 308,

  /**
  * Fingerprint (little, right hand)
  */
  FINGER_RIGHT_LITTLE = 309,

  /**
  * Fingerprint (four without thumb on right hand)
  */
  FINGER_RIGHT_FOUR_FINGERS = 313,

  /**
  * Fingerprint (four without thumb on left hand
  */
  FINGER_LEFT_FOUR_FINGERS = 314,

  /**
  * Fingerprint (two thumbs)
  */
  FINGER_TWO_THUMBS = 315
}
