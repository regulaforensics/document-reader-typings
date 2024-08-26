import { DetailsRFID, ProcessResponse, StatusContainer } from '@/models'
import { eCheckResult } from '@/consts'


/**
* Get Rfid checks summary
* @param {ProcessResponse} input
* @returns {DetailsRFID}
*/
export const getRfidChecksSummary = (input: ProcessResponse): DetailsRFID => {
  const status = StatusContainer.fromProcessResponse(input)
  const candidates: DetailsRFID[] = []

  status.forEach((container) => {
    if (container.Status.detailsRFID) {
      candidates.push(container.Status.detailsRFID)
    }
  })

  if (candidates.length) {
    return candidates[0]
  }

  const result = new DetailsRFID()

  result.AA = eCheckResult.WAS_NOT_DONE
  result.BAC = eCheckResult.WAS_NOT_DONE
  result.CA = eCheckResult.WAS_NOT_DONE
  result.PA = eCheckResult.WAS_NOT_DONE
  result.PACE = eCheckResult.WAS_NOT_DONE
  result.TA = eCheckResult.WAS_NOT_DONE
  result.overallStatus = eCheckResult.WAS_NOT_DONE

  return result
}
