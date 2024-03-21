import { Module } from '@nestjs/common';
import { ChatModuleService } from './chat-module.service';
import { ChatModuleController } from './chat-module.controller';

@Module({
  controllers: [ChatModuleController],
  providers: [ChatModuleService],
})
export class ChatModuleModule {}
