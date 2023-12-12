import { TransformFnParams } from 'class-transformer/types/interfaces'

import { StatusContainer } from './members'


export type ContainerUnion = null
export type IContainerUnion = null

export namespace ContainerUnion {
  export const transform = ({ value }: TransformFnParams) => StatusContainer.fromPlain(value)
}
