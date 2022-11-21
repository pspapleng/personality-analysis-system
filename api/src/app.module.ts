import { Module } from '@nestjs/common';
import { CustomLoggerModule } from './custom-logger.module';
import { CharacterModule } from './character/character.module';
import { GlobalModule } from './global.module';

@Module({
  imports: [GlobalModule, CustomLoggerModule, CharacterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
