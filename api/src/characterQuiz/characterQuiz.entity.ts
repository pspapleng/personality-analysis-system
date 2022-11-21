import { IsNumber, IsString } from 'class-validator';

export class CharacterQuizEntity {
  id: string;
  characterId: string;

  @IsNumber()
  index: number;

  @IsString()
  answer: string;

  constructor(payload: Partial<CharacterQuizEntity>) {
    Object.assign(this, payload);
  }
}
