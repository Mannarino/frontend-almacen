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
     return this.http.post(`${environment.url_endpoint}/productos/agregar-productos`,producto)
    }
  getAllProducts(){
     return this.http.get(`${environment.url_endpoint}/productos/agregar-productos`)
    }
  getOneProduct<Producto>(id){
     return this.http.get(`${environment.url_endpoint}/productos/agregar-productos/${id}`)
    } 
  actualizarProducto(producto,id){
     return this.http.put(`${environment.url_endpoint}/productos/agregar-productos/${id}`,producto)
    }
  deleteProducto(id){
     return this.http.delete(`${environment.url_endpoint}/productos/agregar-productos/${id}`)
    }

  obtenerPrecioFinal(precioCosto,porcentajeGanado,precioFinal){
  
  	if(porcentajeGanado<10){
  		let porcentajeACalcular ="1.0"+porcentajeGanado
  		let porcentajeACalcularConvertido = Number(porcentajeACalcular)
  	  let preciofinal = precioCosto * porcentajeACalcularConvertido
 
  	    precioFinal.setValue(preciofinal.toFixed(0))
  	}else{
  		let porcentajeACalcular ="1."+porcentajeGanado
  		let porcentajeACalcularConvertido = Number(porcentajeACalcular)
  		let preciofinal = precioCosto * porcentajeACalcularConvertido
 
  	    precioFinal.setValue(preciofinal.toFixed(0))
    }
  } 
}
