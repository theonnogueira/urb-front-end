import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = 
  {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllUsuario(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios', this.token)
  }

  postUsuario(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>('http://localhost:8080/usuarios', usuario, this.token)
  }
}
