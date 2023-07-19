import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearProductos(data: any) {
    return this.http.post(this.URL_BASE + 'producto', data);
  }
  obtenerProductos() {
    return this.http.get<any>(this.URL_BASE + 'producto');
  }

  obtenerProductosId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'producto' + '/' + id);
  }

  editarProductos(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'producto' + '/' + id, data);
  }

  eliminarProductos(id: number) {
    return this.http.delete(this.URL_BASE + 'producto' + '/' + id);
  }

}
