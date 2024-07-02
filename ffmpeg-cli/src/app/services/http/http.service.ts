import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoList } from '../../types/video-list';
import { GET_LIST, tokenValue } from '../../tokens/hosts';

@Injectable()
export class HttpService {

  public data$: Observable<VideoList>;

  constructor(
    private http: HttpClient,
    @Inject(GET_LIST) readonly listUrl: tokenValue,
  ) {
    this.data$ = this.getList();
  }

  getList(): Observable<VideoList | any> {
    return this.http.get(this.listUrl.value);
  }
}
