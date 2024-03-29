import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../modelo/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../modelo/login-usuario';
import { JwtDto } from '../modelo/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // authURL = 'http://localhost:8080/auth/'
  authURL = 'https://portfolio-backend-ap4.onrender.com/auth/'


  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }
}
