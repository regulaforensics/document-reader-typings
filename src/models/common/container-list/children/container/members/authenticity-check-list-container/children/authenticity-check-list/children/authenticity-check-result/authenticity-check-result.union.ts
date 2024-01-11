import { eAuthenticity } from '@/consts'
import { isObject } from '@/helpers'
import {
  AuthenticityFiberCheckResult,
  AuthenticityIdentCheckResult,
  AuthenticityOCRSecurityTextCheckResult,
  AuthenticityPhotoIdentCheckResult,
  AuthenticitySecurityFeatureCheckResult,
  iAuthenticityFiberCheckResult,
  iAuthenticityIdentCheckResult,
  iAuthenticityOCRSecurityTextCheckResult,
  iAuthenticityPhotoIdentCheckResult,
  iAuthenticitySecurityFeatureCheckResult
} from './members'


/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export type uAuthenticityCheckResult =
  AuthenticityFiberCheckResult |
  AuthenticityIdentCheckResult |
  AuthenticityOCRSecurityTextCheckResult |
  AuthenticityPhotoIdentCheckResult |
  AuthenticitySecurityFeatureCheckResult

/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export type iuAuthenticityCheckResult =
  iAuthenticityFiberCheckResult |
  iAuthenticityIdentCheckResult |
  iAuthenticityOCRSecurityTextCheckResult |
  iAuthenticityPhotoIdentCheckResult |
  iAuthenticitySecurityFeatureCheckResult

/**
* Structure serves for storing the results of a single type
* document authenticity check
*/
export namespace uAuthenticityCheckResult {
  /**
  * Transform list of unknown items to list of uAuthenticityCheckResult
  * @internal
  * @param {unknown[]} items - list of unknown items
  * @returns {uAuthenticityCheckResult[]} - list of uAuthenticityCheckResult
  */
  export const transformList = (items: unknown[]) => {
    const result: uAuthenticityCheckResult[] = []

    items.forEach((item) => {
      if (!isObject(item) || !item.hasOwnProperty('Type')) {
        return
      }

      // @ts-ignore
      const { Type } = item

      switch (Type) {
        case eAuthenticity.UV_FIBERS:
        case eAuthenticity.UV_BACKGROUND:
          result.push(AuthenticityFiberCheckResult.fromPlain(item))
          break

        case eAuthenticity.IMAGE_PATTERN:
        case eAuthenticity.IR_VISIBILITY:
        case eAuthenticity.OVI:
        case eAuthenticity.IR_LUMINESCENCE:
        case eAuthenticity.PORTRAIT_COMPARISON:
        case eAuthenticity.KINEGRAM:
        case eAuthenticity.LETTER_SCREEN:
        case eAuthenticity.HOLOGRAM_DETECTION:
        case eAuthenticity.FINGERPRINT_COMPARISON:
        case eAuthenticity.LIVENESS:
          result.push(AuthenticityIdentCheckResult.fromPlain(item))
          break

        case eAuthenticity.OCR_SECURITY_TEXT:
          result.push(AuthenticityOCRSecurityTextCheckResult.fromPlain(item))
          break

        case eAuthenticity.IPI:
        case eAuthenticity.IR_PHOTO:
          result.push(AuthenticityPhotoIdentCheckResult.fromPlain(item))
          break

        case eAuthenticity.UV_LUMINESCENCE:
        case eAuthenticity.IR_B900:
        case eAuthenticity.AXIAL_PROTECTION:
        case eAuthenticity.PHOTO_EMBED_TYPE:
        case eAuthenticity.HOLOGRAMS:
        case eAuthenticity.PHOTO_AREA:
        case eAuthenticity.BARCODE_FORMAT_CHECK:
        case eAuthenticity.EXTENDED_OCR_CHECK:
        case eAuthenticity.EXTENDED_MRZ_CHECK:
        case eAuthenticity.STATUS_ONLY:
          result.push(AuthenticitySecurityFeatureCheckResult.fromPlain(item))
          break
      }
    })

    return result
  }
}
