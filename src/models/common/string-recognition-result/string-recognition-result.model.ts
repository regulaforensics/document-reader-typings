import { IsArray, IsDefined, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { ISymbolRecognitionResult, SymbolRecognitionResult } from './children'


export interface IStringRecognitionResult {
  StringResult: ISymbolRecognitionResult[]
}

export class StringRecognitionResult implements IStringRecognitionResult {
  @Expose()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SymbolRecognitionResult)
  StringResult: SymbolRecognitionResult[]
}
