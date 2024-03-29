import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';
import {FormsModule} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  //expURL = 'http://localhost:8080/explab/'
  expURL = 'https://portfolio-backend-ap4.onrender.com/explab/'
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
