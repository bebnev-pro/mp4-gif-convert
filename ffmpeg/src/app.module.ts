import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client-dist/browser'),
    }),
    NestjsFormDataModule.config({
      fileSystemStoragePath: '/temp-storage',
      storage: MemoryStoredFile
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'MOCK_PATH',
      useValue: 'test/mock-data',
    },
    {
      provide: 'GIF_OUT',
      useValue: 'gif-out',
    }
  ],
})
export class AppModule {}
