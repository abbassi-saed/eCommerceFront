import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }


  getAll(){
    return this.http.get(`${environment.apiUrl}products`,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }


  deleteProduct(id: string) {
    return this.http.delete(`${environment.apiUrl}products/`+id,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }


  register(data : {title:string ,price:number,desciption:string,email : string, category:string}){

    return this.http.post(`${environment.apiUrl}products`, data,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
