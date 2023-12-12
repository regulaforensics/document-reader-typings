import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Expose, Type } from 'class-transformer'

import { BcPDF417INFO, BcROIDETECT, DataModule, IBcPDF417INFO, IBcROIDETECT, IDataModule } from './children'


export interface IPArrayField {
  bcAngle_DETECT?: number
  bcCodeResult?: number
  bcCountModule?: number
  bcDataModule?: IDataModule[]
  bcPDF417INFO?: IBcPDF417INFO
  bcROI_DETECT?: IBcROIDETECT
  bcTextDecoderTypes?: number
  bcTextFieldType?: number
  bcType_DECODE?: number
  bcType_DETECT?: number
}

export class PArrayField implements IPArrayField {
  @Expose()
  @IsOptional()
  @IsNumber()
  bcAngle_DETECT?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcCodeResult?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcCountModule?: number

  @Expose()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => DataModule)
  @IsArray()
  bcDataModule?: DataModule[]

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => BcPDF417INFO)
  bcPDF417INFO?: BcPDF417INFO

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => BcROIDETECT)
  bcROI_DETECT?: BcROIDETECT

  @Expose()
  @IsOptional()
  @IsNumber()
  bcTextDecoderTypes?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcTextFieldType?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcType_DECODE?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  bcType_DETECT?: number
}
