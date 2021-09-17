import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private statusUrl = 'http://86.245.16.8:2002/';

  constructor(private http: HttpClient) {}

  getStatus(): Promise<void | any> {
    return this.http
      .post(this.statusUrl, { responseType: 'json' })
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch(this.error);
  }

  private error(error: any) {
    let message = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(message);
  }
}
