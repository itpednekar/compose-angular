import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(public http: HttpClient) { }
  url = "http://172.18.4.24:7878/product";
  Select()
  {
    return this.http.get(this.url);
  }
  
}
