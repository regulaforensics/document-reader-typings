import { IsDefined, IsEnum, IsIn, IsOptional, ValidateNested, validateSync } from 'class-validator'
import { FaceDetectionItem } from '@regulaforensics/document-reader-webclient'
import { Expose, instanceToPlain, plainToClass, Type } from 'class-transformer'

import { DocReaderTypeError } from '@/errors'
import { eResultType } from '@/consts'
import { aContainer } from '../../container.abstract'
import { ProcessResponse } from '@/models'
import { iFaceDetection, FaceDetection } from './children'

/**
 * Result type of FaceDetectionContainer
 */
export type tFaceDetectionContainerResultType = eResultType.FACE_DETECTION

/**
 * Result type of FaceDetectionContainer
 * @type {tFaceDetectionContainerResultType[]}
 */
export const FaceDetectionContainerResultTypes: tFaceDetectionContainerResultType[] = [eResultType.FACE_DETECTION]

/**
 * Container for face detection
 */
export interface iFaceDetectionContainer extends aContainer, FaceDetectionItem {
  /**
   * @type {iFaceDetection}
   */
  FaceDetection?: iFaceDetection

  /**
   * Result type stored in this container
   * @type {tFaceDetectionContainerResultType}
   */
  result_type: tFaceDetectionContainerResultType
}

/**
 * Container for face detection
 */
@Expose()
export class FaceDetectionContainer extends aContainer implements iFaceDetectionContainer {
  /**
   * @type {FaceDetection}
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => FaceDetection)
  FaceDetection?: FaceDetection

  /**
   * Result type stored in this container
   * @type {tFaceDetectionContainerResultType}
   */
  @IsDefined()
  @IsEnum(eResultType)
  @IsIn(FaceDetectionContainerResultTypes)
  result_type: tFaceDetectionContainerResultType

  /**
   * Creates an instance ofFaceDetectionContainer from plain object
   *
   * @param {unknown} input - plain object
   * @returns {FaceDetectionContainer}
   */
  static fromPlain = (input: unknown): FaceDetectionContainer => plainToClass(FaceDetectionContainer, input)

  /**
   * Get FaceDetectionContainer from ProcessResponse
   * @param {ProcessResponse} input - ProcessResponse object
   * @param {boolean} asPlain - return as plain object
   * @returns {(FaceDetectionContainer|iFaceDetectionContainer)[]}
   */
  static fromProcessResponse(input: ProcessResponse, asPlain: true): iFaceDetectionContainer[]
  static fromProcessResponse(input: ProcessResponse, asPlain?: false): FaceDetectionContainer[]
  static fromProcessResponse(
    input: ProcessResponse,
    asPlain: boolean = false,
  ): (FaceDetectionContainer | iFaceDetectionContainer)[] {
    try {
      const { ContainerList } = input

      const result = ContainerList.List.filter((container): container is FaceDetectionContainer =>
        FaceDetectionContainerResultTypes.includes(<tFaceDetectionContainerResultType>container.result_type),
      )

      if (asPlain) {
        return result.map(
          (container) => instanceToPlain(container, { exposeUnsetFields: false }) as iFaceDetectionContainer,
        )
      }

      return result
    } catch (error) {
      return []
    }
  }

  /**
   * Check if the given instance of FaceDetectionContainer is valid
   *
   * @param {FaceDetectionContainer} instance - instance of FaceDetectionContainer to be checked
   * @throws {DocReaderTypeError} - if the given instance of FaceDetectionContainer is not valid
   * @returns {true | never} - true if the given instance of FaceDetectionContainer is valid
   */
  static validate = (instance: FaceDetectionContainer): true | never => {
    const errors = validateSync(FaceDetectionContainer.fromPlain(instance))

    if (errors.length) {
      throw new DocReaderTypeError(
        'FaceDetectionContainer validation error: the data received does not match model structure!',
        errors,
      )
    }

    return true
  }
}
