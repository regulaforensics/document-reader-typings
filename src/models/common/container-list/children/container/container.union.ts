import { TransformFnParams } from 'class-transformer/types/interfaces'

import { ResultType } from 'consts'
import { IStatusContainer, ITextContainer, StatusContainer, TextContainer } from './members'


export type ContainerUnion =
  StatusContainer |
  TextContainer

export type IContainerUnion =
  IStatusContainer |
  ITextContainer

export namespace ContainerUnion {
  export const transform = (data: TransformFnParams) => {
    const { value } = data

    const result: ContainerUnion[] = []

    if (!Array.isArray(value)) {
      return result
    }

    for (const item of value) {
      switch (item?.result_type) {
        case ResultType.STATUS:
          result.push(StatusContainer.fromPlain(item))
        break
      }
    }


    return result
  }
}
