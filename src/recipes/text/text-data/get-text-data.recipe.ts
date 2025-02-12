import { ProcessResponse, TextResultContainer } from '@/models'
import { eCheckResult } from '@/consts'

import { RTextData, RTextDataSource, RTextDataComparison } from './models'


export const getTextData = (input: ProcessResponse): RTextData[] => {
  const result: RTextData[] = []
  const containers = TextResultContainer.fromProcessResponse(input)

  if (!containers.length) {
    return result
  }

  containers.forEach((container) => {
    const availableSources = container.Text.availableSourceList.map(i => i.source)

    container.Text.fieldList.forEach((field) => {
      const current = new RTextData()

      current.type = field.fieldType
      current.value = field.value
      current.lcid = field.lcid
      current.checkResult = field.status

      current.comparisonList = field.comparisonList?.map((i) => {
        const current =  new RTextDataComparison()

        current.sourceLeft = i.sourceLeft
        current.sourceRight = i.sourceRight
        current.status = i.status

        return current
      }) || []

      current.bySource = []

      availableSources.forEach((source) => {
        const validity = field.validityList.find(i => i.source === source)
        const sourceDataArray = field.valueList.filter((i) => i.source === source)

        sourceDataArray.forEach((i) => {
          const currentSource = new RTextDataSource()

          currentSource.checkResult = validity?.status ?? eCheckResult.WAS_NOT_DONE
          currentSource.source = i.source
          currentSource.rect = i?.fieldRect
          currentSource.value = i?.value ?? ''
          currentSource.pageIndex = i?.pageIndex ?? 0
          currentSource.probability = i?.probability ?? 0

          current.bySource.push(currentSource)
        })

      })

      if (current.bySource.length) {
        result.push(current)
      }
    })
  })

  return result
}
