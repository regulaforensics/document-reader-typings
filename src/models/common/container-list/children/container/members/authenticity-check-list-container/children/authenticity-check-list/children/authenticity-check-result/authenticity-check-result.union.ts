import { Authenticity } from '@/consts'
import { isObject } from '@/helpers'
import {
  AuthenticityFiberCheckResult,
  AuthenticityIdentCheckResult,
  AuthenticityOCRSecurityTextCheckResult,
  AuthenticityPhotoIdentCheckResult,
  AuthenticitySecurityFeatureCheckResult,
  IAuthenticityFiberCheckResult,
  IAuthenticityIdentCheckResult,
  IAuthenticityOCRSecurityTextCheckResult,
  IAuthenticityPhotoIdentCheckResult,
  IAuthenticitySecurityFeatureCheckResult
} from './members'


export type AuthenticityCheckResultUnion =
  AuthenticityFiberCheckResult |
  AuthenticityIdentCheckResult |
  AuthenticityOCRSecurityTextCheckResult |
  AuthenticityPhotoIdentCheckResult |
  AuthenticitySecurityFeatureCheckResult

export type IAuthenticityCheckResultUnion =
  IAuthenticityFiberCheckResult |
  IAuthenticityIdentCheckResult |
  IAuthenticityOCRSecurityTextCheckResult |
  IAuthenticityPhotoIdentCheckResult |
  IAuthenticitySecurityFeatureCheckResult

export namespace AuthenticityCheckResultUnion {
  export const transformList = (items: unknown[]) => {
    const result: AuthenticityCheckResultUnion[] = []

    items.forEach((item) => {
      if (!isObject(item) || !item.hasOwnProperty('Type')) {
        return
      }

      // @ts-ignore
      const { Type } = item

      switch (Type) {
        case Authenticity.UV_FIBERS:
        case Authenticity.UV_BACKGROUND:
          result.push(AuthenticityFiberCheckResult.fromPlain(item))
          break

        case Authenticity.IMAGE_PATTERN:
        case Authenticity.IR_VISIBILITY:
        case Authenticity.OVI:
        case Authenticity.IR_LUMINESCENCE:
        case Authenticity.PORTRAIT_COMPARISON:
        case Authenticity.KINEGRAM:
        case Authenticity.LETTER_SCREEN:
        case Authenticity.HOLOGRAM_DETECTION:
        case Authenticity.FINGERPRINT_COMPARISON:
        case Authenticity.LIVENESS:
          result.push(AuthenticityIdentCheckResult.fromPlain(item))
          break

        case Authenticity.OCR_SECURITY_TEXT:
          result.push(AuthenticityOCRSecurityTextCheckResult.fromPlain(item))
          break

        case Authenticity.IPI:
        case Authenticity.IR_PHOTO:
          result.push(AuthenticityPhotoIdentCheckResult.fromPlain(item))
          break

        case Authenticity.UV_LUMINESCENCE:
        case Authenticity.IR_B900:
        case Authenticity.AXIAL_PROTECTION:
        case Authenticity.PHOTO_EMBED_TYPE:
        case Authenticity.HOLOGRAMS:
        case Authenticity.PHOTO_AREA:
        case Authenticity.BARCODE_FORMAT_CHECK:
        case Authenticity.EXTENDED_OCR_CHECK:
        case Authenticity.EXTENDED_MRZ_CHECK:
        case Authenticity.STATUS_ONLY:
          result.push(AuthenticitySecurityFeatureCheckResult.fromPlain(item))
          break
      }
    })

    return result
  }
}
