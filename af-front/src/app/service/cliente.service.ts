import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private readonly http: HttpClient) {}

  private readonly api = environment.api

  pesquisar(codigo: number): Observable<any> {
    throw new Error(`Method not implemented.`);
  }

  inserir(obj: Cliente): Observable<any> {
    console.log(obj)
    return this.http.post(`${this.api}/cliente`, obj);
  }

  verificarEmail(email: string): Observable<any> {
    throw new Error(`Method not implemented.`);
  }

  gravar(obj: Cliente): Observable<Object> {
    return this.http.post(`${this.api}/cliente`, obj);
  }

  alterar(obj: Cliente): Observable<Object> {
    return this.http.put(`${this.api}/cliente`, obj);
  }

  carregar(codigo: number): Observable<any> {
    return this.http.get(`${this.api}/cliente/` + codigo);
  }

  remover(codigo: number): Observable<Object> {
    return this.http.delete(`${this.api}/cliente/` + codigo);
  }

  listar(): Observable<any> {
    return this.http.get(`${this.api}/clientes`);
  }

  fazerLogin(obj: Cliente): Observable<any> {
    return this.http.post(`${this.api}/cliente/login`, obj);
  }
}
