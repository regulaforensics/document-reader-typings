import { IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { RfidLocation } from '~src/consts'
import { FDSIDList, IFDSIDList } from './children'


export interface IOneCandidate {
  DocumentName?: string
  ID?: number
  P?: number
  RFID_Presence?: RfidLocation
  FDSIDList?: IFDSIDList
  NecessaryLights?: number
  CheckAuthenticity?: number
  UVExp?: number
  AuthenticityNecessaryLights?: number
}

export class OneCandidate implements IOneCandidate {
  @Expose()
  @IsOptional()
  @IsString()
  DocumentName?: string

  @Expose()
  @IsOptional()
  @IsNumber()
  ID?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  P?: number

  @Expose()
  @IsOptional()
  @IsEnum(RfidLocation)
  RFID_Presence?: RfidLocation

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => FDSIDList)
  FDSIDList?: FDSIDList

  @Expose()
  @IsOptional()
  @IsNumber()
  NecessaryLights?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  CheckAuthenticity?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  UVExp?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  AuthenticityNecessaryLights?: number
}
