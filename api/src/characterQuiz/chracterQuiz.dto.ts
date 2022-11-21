import { IsNumber, IsString } from 'class-validator';

export class CreateCharaterQuizDto {
  @IsNumber()
  index: number;
  @IsString()
  answer: string;
}
