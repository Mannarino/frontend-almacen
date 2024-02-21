import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {Producto} from '../interfaces/producto'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  agregarProducto(producto){
     return this.http.post(`${environment.url_endpoint}/productos/`,producto)

    }
  getAllProducts(){
    console.log('se consolea cada vez que se haga un request para obtener la lista')
     return this.http.get(`${environment.url_endpoint}/productos/`); 
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
