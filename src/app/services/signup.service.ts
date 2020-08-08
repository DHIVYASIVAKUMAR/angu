import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './../classes/login';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }
  
  getdata(para): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:5000/department/',{params:para});
  }

  post(oppost:Login):Observable<any> {
    let url = 'http://127.0.0.1:5000/department/'+oppost.lid+'/'oppost.username+'/'oppost.password+'/'oppost.phonenum+'/';
    return this.httpClient.post(url,oppost);
}
