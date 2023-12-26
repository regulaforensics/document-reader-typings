import { ResultType } from '@/consts'
import { IStatusContainer, ITextContainer, StatusContainer, TextContainer } from './members'
import { isObject } from '@/helpers'


export type ContainerUnion =
  StatusContainer |
  TextContainer

export type IContainerUnion =
  IStatusContainer |
  ITextContainer

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
          result.push(TextContainer.fromPlain(item))
        break
      }
    }

    return result
  }
}
