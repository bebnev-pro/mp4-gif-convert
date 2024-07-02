import { Body, Controller, Get, Inject, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import * as fs from 'node:fs';
import { FileResponse } from './types/file-response';
import { VideoList } from './types/video-list';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {

  constructor(
      private readonly appService: AppService,
      @Inject('MOCK_PATH') readonly mockPath: string,
  ) {}

  @Get('/get-video-list')
  getVideoList(): string {

    const videoList: VideoList = fs
        .readdirSync(`./${this.mockPath}`)
        .filter((file: string) => file.endsWith('.mp4'))
        .map((file: string): string => `${this.mockPath}/${file}`);

    return JSON.stringify(videoList);
  }

  // for the Cypress TEST: req - file, res - gif
  @Get('/get-file/:queryFile')
  getFile(
      @Res() response: FileResponse,
      @Param('queryFile') queryFile: string,
  ): void {

    if (queryFile === 'favicon.ico') {
      response.status(204).send('OK');
      return;
    }

    const gifName: string = this.appService.makeGif(this.mockPath, queryFile);

    response.attachment();
    this.appService.responseGif(response, gifName).pipe(response);
  }

  @Get('test/mock-data/:queryFile')
  getVideoFile(
      @Res() response: FileResponse,
      @Param('queryFile') queryFile: string,
  ): void {

    if (queryFile === 'favicon.ico') {
      response.status(204).send('OK');
      return;
    }

    const saveFilename: string = join(process.cwd(), `${this.mockPath}/${queryFile}`);

    response.attachment();
    fs.createReadStream(saveFilename)
        .pipe(
            this.appService.writeResParams(response, 'video/mp4', saveFilename)
        );
  }

  @Post('upload/file')
  @UseInterceptors(FileInterceptor('video'))
  receiveFile(
      @Res() response: FileResponse,
      @UploadedFile() file: any,
      @Body() body: FormData,
  ): void {
    fs.writeFileSync(`./temp-storage/${file.originalname}`, file.buffer);

    const gifName: string = this.appService.makeGif('temp-storage', file.originalname);

    response.attachment();
    this.appService.responseGif(response, gifName).pipe(response);
  }
}
