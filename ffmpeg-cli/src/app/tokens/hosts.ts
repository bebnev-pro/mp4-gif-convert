import { InjectionToken } from '@angular/core';

export type tokenValue = {
  value: string;
}

export const GET_LIST: InjectionToken<string> = new InjectionToken<tokenValue>(
  'url path to get video list',
  {
  factory: (

  ): tokenValue => ({
    value: `/get-video-list`,
  }),
});

export const HOST: InjectionToken<string> = new InjectionToken<tokenValue>(
  'hostname of server',
  {
    factory: (): tokenValue => ({
      value: 'http://localhost:3000/',
    }),
  });
