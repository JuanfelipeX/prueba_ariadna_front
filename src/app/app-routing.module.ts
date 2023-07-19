import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListarComponent } from './components/listar/listar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
