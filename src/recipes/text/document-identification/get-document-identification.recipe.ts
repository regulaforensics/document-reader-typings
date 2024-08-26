import { OneCandidateContainer, ProcessResponse } from '@/models'
import { RDocumentIdentification } from './models'


/**
* Returns document identification from process response
* @param {ProcessResponse} input
* @returns {RDocumentIdentification[]}
*/
export function getDocumentIdentification(input: ProcessResponse): RDocumentIdentification[] {
  const containers = OneCandidateContainer.fromProcessResponse(input)
  const result: RDocumentIdentification[] = []

  for (let i = 0; i < containers.length; i++) {
    const container = containers[i]

    if (container.OneCandidate?.DocumentName) {
      result.push(RDocumentIdentification.fromPlain({
        documentName: container.OneCandidate.DocumentName,
        pageIndex: container.page_idx ?? 0,
        isDeprecated: container.OneCandidate.FDSIDList.isDeprecated,
        documentId: container.OneCandidate.ID,
        probability: container.OneCandidate.P,
        documentCategory: container.OneCandidate.FDSIDList.dDescription
      }))
    }
  }

  return result
}
