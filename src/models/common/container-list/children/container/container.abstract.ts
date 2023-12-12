import { ResultType } from 'consts'


export abstract class ContainerAbstract {
  buf_length?: number
  light?: number
  list_idx?: number
  page_idx?: number
  result_type: ResultType
}
