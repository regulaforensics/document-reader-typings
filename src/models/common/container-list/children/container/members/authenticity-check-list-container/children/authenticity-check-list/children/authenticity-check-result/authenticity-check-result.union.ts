import { AuthenticityResultType } from '@/consts'
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
        case AuthenticityResultType.UV_FIBERS:
        case AuthenticityResultType.UV_BACKGROUND:
          result.push(AuthenticityFiberCheckResult.fromPlain(item))
          break

        case AuthenticityResultType.IMAGE_PATTERN:
        case AuthenticityResultType.IR_VISIBILITY:
        case AuthenticityResultType.OVI:
        case AuthenticityResultType.IR_LUMINESCENCE:
        case AuthenticityResultType.PORTRAIT_COMPARISON:
        case AuthenticityResultType.KINEGRAM:
        case AuthenticityResultType.LETTER_SCREEN:
        case AuthenticityResultType.HOLOGRAM_DETECTION:
        case AuthenticityResultType.FINGERPRINT_COMPARISON:
        case AuthenticityResultType.LIVENESS:
          result.push(AuthenticityIdentCheckResult.fromPlain(item))
          break

        case AuthenticityResultType.OCR_SECURITY_TEXT:
          result.push(AuthenticityOCRSecurityTextCheckResult.fromPlain(item))
          break

        case AuthenticityResultType.IPI:
        case AuthenticityResultType.IR_PHOTO:
          result.push(AuthenticityPhotoIdentCheckResult.fromPlain(item))
          break

        case AuthenticityResultType.UV_LUMINESCENCE:
        case AuthenticityResultType.IR_B900:
        case AuthenticityResultType.AXIAL_PROTECTION:
        case AuthenticityResultType.PHOTO_EMBED_TYPE:
        case AuthenticityResultType.HOLOGRAMS:
        case AuthenticityResultType.PHOTO_AREA:
        case AuthenticityResultType.BARCODE_FORMAT_CHECK:
        case AuthenticityResultType.EXTENDED_OCR_CHECK:
        case AuthenticityResultType.EXTENDED_MRZ_CHECK:
        case AuthenticityResultType.STATUS_ONLY:
          result.push(AuthenticitySecurityFeatureCheckResult.fromPlain(item))
          break
      }
    })

    return result
  }
}
