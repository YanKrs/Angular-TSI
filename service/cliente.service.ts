import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {

  }
// Get
  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/Cliente');
  }
// POST
  inserir (cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:3000/Cliente', cliente);
  }
// PUT
  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`http://localhost:3000/Cliente/${cliente.id}`, cliente);
  }
// DELETE
  remover (id: number): Observable<any>{
  return  this.http.delete(`http://localhost:3000/Cliente/${id}`);
  }
}
