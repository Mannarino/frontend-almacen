import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {Producto} from '../interfaces/producto'
import { StateManagetService } from './state-managet.service';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(private http: HttpClient,
              private stateManatService:StateManagetService) { }

  agregarProducto(producto){
     return this.http.post(`${environment.url_endpoint}/productos/`,producto)
    }
  getAllProducts(){
      this.http.get(`${environment.url_endpoint}/productos/`)
      .subscribe( (value:Producto[]) =>{
        this.stateManatService.actualizarLista(value)
        console.log('se consolea cada vez que se hace un request para obtener toda la lista')
      })
    }
  getOneProduct<Producto>(id){
     return this.http.get(`${environment.url_endpoint}/productos/${id}`)
    } 
  actualizarProducto(producto,id){
     return this.http.put(`${environment.url_endpoint}/productos/${id}`,producto)
    }
  deleteProducto(id){
     return this.http.delete(`${environment.url_endpoint}/productos/${id}`)
    }

  
}
