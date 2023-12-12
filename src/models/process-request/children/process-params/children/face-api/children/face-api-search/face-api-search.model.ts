import { IsNumber, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'


export interface IFaceApiSearch {
  limit?: number
  threshold?: number
  group_ids?: number[]
}

export class FaceApiSearch implements IFaceApiSearch {
  @Expose()
  @IsOptional()
  @IsNumber()
  limit?: number

  @Expose()
  @IsOptional()
  @IsNumber()
  threshold?: number

  @Expose()
  @IsOptional()
  @IsNumber({}, { each: true })
  group_ids?: number[]
}
