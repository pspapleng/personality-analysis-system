import { Body, Controller, Post } from '@nestjs/common';
import { CreateCharacterDto } from './character.dto';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}
  @Post('/')
  create(@Body() body: CreateCharacterDto) {
    return this.characterService.create(body);
  }
}
