import { TransformFnParams } from 'class-transformer/types/interfaces'

import { ResultType } from '@/consts'
import { IStatusContainer, ITextContainer, StatusContainer, TextContainer } from './members'
import * as process from 'process'


export type ContainerUnion =
  StatusContainer |
  TextContainer

export type IContainerUnion =
  IStatusContainer |
  ITextContainer

export namespace ContainerUnion {
  export const transform = (data: TransformFnParams) => {
    const { obj } = data
    const value = obj.List
    const result: ContainerUnion[] = []

    if (!Array.isArray(value)) {
      return result
    }

    for (const item of value) {
      switch (item?.result_type) {
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
