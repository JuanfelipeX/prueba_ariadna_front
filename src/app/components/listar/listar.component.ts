import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista_productos: any[] = [];
  formulario_productos: any[] = [];
  editar_productos: any;
  
  productoSeleccionado: any;
  @ViewChild('modalEditar') modalEditar: any;


  constructor(
    private productoService: ProductosService,
    private router: Router,
    private modalService: NgbModal
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
        this.abrirModal(element);
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

  abrirModalEditar(producto: any) {
    this.productoSeleccionado = producto;
    this.modalService.open(this.modalEditar, { ariaLabelledBy: 'modalEditar' }).result.then((result) => {
      // Acciones al cerrar el modal si es necesario
    }, (reason) => {
      // Acciones al cancelar o cerrar el modal si es necesario
    });
  }

  
  abrirModal(element: any) {
    const modalRef = this.modalService.open(element, { centered: true });
    // Aquí puedes realizar las acciones necesarias al abrir el modal
  }

  guardarCambios() {
    // Lógica para guardar los cambios en el modal
  }

}
