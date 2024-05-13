/**
* Make better MRZ detection on complex noisy backgrounds, like BW photocopy of some documents.
* @enum {number}
*/
export enum eMRZDetectMode {
  DEFAULT = 0,
  RESIZE_BINARIZE_WINDOW = 1,
  BLUR_BEFORE_BINARIZATION = 2
}
