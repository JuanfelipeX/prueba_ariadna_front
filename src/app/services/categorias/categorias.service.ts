import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearCategoria(data: any) {
    return this.http.post(this.URL_BASE + 'categoria', data);
  }
  obtenerCategoria() {
    return this.http.get<any>(this.URL_BASE + 'categoria');
  }

  obtenerCategoriaId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'categoria' + '/' + id);
  }

  editarCategoria(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'categoria' + '/' + id, data);
  }

  eliminarCategoria(id: number) {
    return this.http.delete(this.URL_BASE + 'categoria' + '/' + id);
  }

}
