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
  formulario_productos: any[] = [];
  editar_productos: any;

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
  obtenerProductosId(element: any) {
    this.productoService.obtenerProductosId(element.id).subscribe({
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
  editarProductos(element: any) {
    this.productoService.editarProductos(this.editar_productos, element.id).subscribe({
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
  eliminarProductos(element: any) {
    this.productoService.eliminarProductos(element.id).subscribe({
      next: (data) => {
        this.obtenerProductos();
      },
      error: (err) => {
        console.log("Error: " + err)
      },
    });
  }
}
