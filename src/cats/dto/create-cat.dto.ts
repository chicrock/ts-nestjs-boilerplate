import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumberString()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
