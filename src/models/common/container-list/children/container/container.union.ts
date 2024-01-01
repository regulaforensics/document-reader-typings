import { ResultType } from '@/consts'
import { IStatusContainer, ITextResultContainer, StatusContainer, TextResultContainer } from './members'
import { isObject } from '@/helpers'


export type ContainerUnion =
  StatusContainer |
  TextResultContainer

export type IContainerUnion =
  IStatusContainer |
  ITextResultContainer

export namespace ContainerUnion {
  export const transformList = (items: unknown[]) => {
    const result: ContainerUnion[] = []

    if (!Array.isArray(items)) {
      return result
    }

    for (const item of items) {
      if (!isObject(item) || !item.hasOwnProperty('result_type')) {
        continue
      }

      // @ts-ignore
      const { result_type } = item

      switch (result_type) {
        case ResultType.STATUS:
          result.push(StatusContainer.fromPlain(item))
        break
        case ResultType.TEXT:
          result.push(TextResultContainer.fromPlain(item))
        break
      }
    }

    return result
  }
}
