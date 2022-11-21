import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CharacterQuizEntity } from 'src/characterQuiz/characterQuiz.entity';

export class CharacterEntity {
  id: string;

  @IsString()
  mbti: string;

  @IsNumber()
  age: number;

  @IsString()
  gender: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacterQuizEntity)
  quizzes: CharacterQuizEntity[];

  createdAt: Date;

  constructor(payload: Partial<CharacterEntity>) {
    Object.assign(this, payload);
  }
}
