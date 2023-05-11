import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.model';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //URL = 'http://localhost:8080/personas/';
  URL = 'https://portfolio-backend-ap4.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{

    return this.http.get<persona>(this.URL+'traer/perfil');
    
  }
}
