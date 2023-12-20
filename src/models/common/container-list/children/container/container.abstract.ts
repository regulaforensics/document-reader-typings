import { Light, ResultType } from '@/consts'


export abstract class ContainerAbstract {
  /**
  * Lighting scheme code for the given result (used only for images)
  * @type {Light}
  */
  light: Light

  /** @internal */
  list_idx: number

  /**
  * Page index (when working with multi-page document)
  * @type {number}
  */
  page_idx: number

  /** @internal */
  buf_length: number

  /**
  * Result type stored in this container (one of ResultType identifiers)
  * @type {ResultType}
  */
  result_type: ResultType
}
