import { Response } from 'express';
import { WritableHeaderStream } from '@nestjs/core/router/sse-stream';

export type FileResponse = Response & WritableHeaderStream;