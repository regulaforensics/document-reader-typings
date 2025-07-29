import { DocBinaryInfoContainer, ProcessResponse } from '@/models'
import { eCheckResult, eRfidErrorCodes } from '@/consts'
import { RRfidApplicationItem, iRRfidApplicationItem } from './models'

/**
 * Data group status
 * @param {ProcessResponse} input
 * @returns {RRfidApplicationItem[]}
 */
export const getRfidDataGroupsStatusList = (input: ProcessResponse): RRfidApplicationItem[] => {
  const binary = DocBinaryInfoContainer.fromProcessResponse(input)

  const result: RRfidApplicationItem[] = []

  binary.forEach((container) => {
    const sessionData = container.TDocBinaryInfo.RFID_BINARY_DATA?.RFID_Session_Data

    sessionData?.Applications.forEach((application) => {
      const applicationItem: iRRfidApplicationItem = {
        type: application.Type,
        groups: [],
      }

      application.Files.forEach((file) => {
        const group = file.Type
        let status = eCheckResult.WAS_NOT_DONE

        switch (file.PA_Status) {
          case eRfidErrorCodes.RFID_Error_NotPerformed:
          case eRfidErrorCodes.RFID_Error_NotAvailable:
            status = eCheckResult.WAS_NOT_DONE
            break
          case eRfidErrorCodes.RFID_Error_NoError:
            status = eCheckResult.OK
            break
          default:
            status = eCheckResult.ERROR
            break
        }

        applicationItem.groups.push({ group, status })
      })

      result.push(applicationItem)
    })
  })

  return result
}
