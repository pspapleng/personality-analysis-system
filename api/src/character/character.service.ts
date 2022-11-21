import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma.service';
import { CreateCharacterDto } from './character.dto';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateCharacterDto) {
    const newCharacter = await this.prisma.character
      .create({
        data: {
          mbti: dto.mbti,
          age: dto.age,
          gender: dto.gender,
        },
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.code);
      });
    await this.prisma.characterQuiz
      .createMany({
        data: dto.quizzes.map((quiz) => ({
          characterId: newCharacter.id,
          index: quiz.index,
          answer: quiz.answer,
        })),
      })
      .catch((error) => {
        throw new InternalServerErrorException(error.code);
      });
    return { id: newCharacter.id };
  }
}
