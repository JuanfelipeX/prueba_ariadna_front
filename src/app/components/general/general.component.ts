import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  lista_productos: any[] = [];
  lista_productos_id: any;
  formulario_productos: any[] = [];
  editar_productos: any;
  elimnar_productos: any;

  constructor(
    private productoService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  /*
  ************************************************
  *              Obtener Productos               *
  * **********************************************
  * */
  obtenerProductos() {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.lista_productos = data;
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }

  
  /*
  ************************************************
  *           Obtener Productos ID               *
  * **********************************************
  * */
  obtenerProductosId() {
    this.productoService.obtenerProductosId(this.lista_productos_id.id).subscribe({
      next: (data) => {
        this.lista_productos = data;
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }

  /*
  ************************************************
  *              Crear Productos               *
  * **********************************************
  * */
  crearProductos() {
    this.productoService.crearProductos(this.formulario_productos).subscribe({
      next: (data) => {
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }

   /*
  ************************************************
  *              Editar Productos               *
  * **********************************************
  * */
  editarProductos() {
    this.productoService.editarProductos(this.editar_productos, this.editar_productos.id).subscribe({
      next: (data) => {
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }

     /*
  ************************************************
  *             Eliminar Productos               *
  * **********************************************
  * */
  eliminarProductos() {
    this.productoService.eliminarProductos(this.elimnar_productos.id).subscribe({
      next: (data) => {
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }
}
