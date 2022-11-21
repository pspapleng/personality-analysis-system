import { PickType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateCharaterQuizDto } from 'src/characterQuiz/chracterQuiz.dto';
import { CharacterEntity } from './character.entity';

export class CreateCharacterDto extends PickType(CharacterEntity, [
  'mbti',
  'age',
  'gender',
] as const) {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCharaterQuizDto)
  quizzes: CreateCharaterQuizDto[];
}
