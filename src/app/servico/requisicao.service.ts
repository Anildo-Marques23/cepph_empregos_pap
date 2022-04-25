import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  

  //requisicaoUrl = '127.0.0.1:8000/api/vaga';
  constructor(private httpClient : HttpClient) { }


  listar(){
   // return this.http.get<any[]>(`${this.requisicaoUrl}`);
   //return this.http.get<any[]>(`${environment.baseUrl}/vagas`);
   return this.httpClient.get('http://127.0.0.1:8000/api/inscritos');
  }
  /*list(){
    return this.http.get<any[]>(`${environment.baseUrl}/inscritos`);
  }*/
}
