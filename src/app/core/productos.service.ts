import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {Producto} from '../interfaces/producto'
import { StateManagetService } from './state-managet.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private http: HttpClient,
              private stateManagetService:StateManagetService) { }

  agregarProducto(producto){
     return this.http.post(`${environment.url_endpoint}/productos/`,producto)
              .pipe(
                tap((response:Producto) => {
                  console.log(response)
                  // Aquí puedes ejecutar otro método 
                  this.stateManagetService.agregarElemento(response);
                })
    );
    }
  getAllProducts(){
      this.http.get(`${environment.url_endpoint}/productos/`)
      .subscribe( (value:Producto[]) =>{
        this.stateManagetService.actualizarLista(value)
        console.log('se consolea cada vez que se hace un request para obtener toda la lista')
      })
    }
  getOneProduct<Producto>(id){
     return this.http.get(`${environment.url_endpoint}/productos/${id}`)
    } 
  actualizarProducto(producto,id){
     return this.http.put(`${environment.url_endpoint}/productos/${id}`,producto)
              .pipe(
                tap((response:Producto) => {
                  console.log(producto)
                  // Aquí puedes ejecutar otro método 
                  this.stateManagetService.editarElemento(id,producto);
                })
          );
    }
  deleteProducto(id){
     return this.http.delete(`${environment.url_endpoint}/productos/${id}`)
              .pipe(
                tap((response:Producto) => {
                  this.stateManagetService.eliminarElemento(id);
                })
);

    }

  
}
