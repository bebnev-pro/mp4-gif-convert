import { Inject, Injectable } from '@nestjs/common';
import * as child from 'node:child_process';
import { v4 as UUIDv4 } from 'uuid';
import { join } from 'path';
import { FileResponse } from './types/file-response';
import * as fs from 'node:fs';

@Injectable()
export class AppService {

  constructor(
      @Inject('GIF_OUT') readonly gifOut: string,
  ) {}

  public makeGif(path: string, filename: string): string {
    const storedFilename: string = `${UUIDv4()}.gif`;
    const execStr: string = `ffmpeg -ss 0 -t 10 -i ./${path}/${filename} -vf "fps=5, scale=-1:400:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 ./${this.gifOut}/${storedFilename}`;

    try {
      child.execSync(execStr);
    } catch (e: unknown) { this.errorHandler(e as Error) }

    return storedFilename;
  }

  public responseGif(response: FileResponse, gifName: string): fs.ReadStream {
    const saveFilename: string = join(process.cwd(), `/${this.gifOut}/${gifName}`);

    this.writeResParams(response, 'image/gif', saveFilename);
    return fs.createReadStream(saveFilename);
  }

  public writeResParams(res: FileResponse, cntType: string, saveFilename: string): FileResponse {
    const stat: fs.Stats = fs.statSync(saveFilename);

    res.writeHead(200, {
      'Content-Type': cntType,
      'Content-Length': stat.size
    });

    return res;
  }

  private errorHandler(err: Error): void {
    console.log(err);
  }
}
