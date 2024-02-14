import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoSvc2Service {
  constructor(private http: HttpClient) {}

  getData() {
    //  getting data
    this.http.get('backend url');

    this.http.post('backend url', 'data');

    this.http.put('', '');

    this.http.delete('');
  }
}
