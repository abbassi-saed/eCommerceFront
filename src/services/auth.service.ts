import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data : {email : string, password:string}){

    return this.http.post(`${environment.apiUrl}users/login`, data);
  }


  register(data : {firstName:string ,lastName:string,nameUser:string,email : string, password:string}){

    return this.http.post(`${environment.apiUrl}users`, data,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
