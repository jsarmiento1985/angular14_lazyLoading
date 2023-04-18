import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


@NgModule({
  declarations: [
    NuevoComponent,
    EditarComponent,
    ListadoComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
