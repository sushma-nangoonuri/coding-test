import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  getServerItems() {
    return this.http.get('/assets/data/server_data.json')
  }
}
