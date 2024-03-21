import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModuleModule } from './chat-module/chat-module.module';

@Module({
  imports: [ChatModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
