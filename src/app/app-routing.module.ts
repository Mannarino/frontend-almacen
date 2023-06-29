import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AgregarProductoComponent} from './agregar-producto/agregar-producto.component'
import {EditarProductoComponent} from './editar-producto/editar-producto.component'
import {ProductoFaltanteComponent} from './producto-faltante/producto-faltante.component'
const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'agregar-producto', component:AgregarProductoComponent},
{path:'productos-faltantes', component:ProductoFaltanteComponent},
{path:'editar-producto/:id', component:EditarProductoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
