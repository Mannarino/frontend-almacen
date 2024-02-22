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

  addProduct(producto){
     return this.http.post(`${environment.url_endpoint}/productos/`,producto)
              .pipe(
                tap((response:Producto) => {
                  console.log(response)
                  // Aquí puedes ejecutar otro método 
                  this.stateManagetService.addElement(response);
                })
    );
    }//el add produt esta haciendo el subscribe y manejo de error desde el componente
     //pero puedo probar hacer todo desde el servicio
     //tiene la particularidad de que hace una limpieza del formulario desde el componente

  getAllProducts(){
      this.http.get(`${environment.url_endpoint}/productos/`)
      .subscribe( (value:Producto[]) =>{
        this.stateManagetService.getList(value)
        console.log('se consolea cada vez que se hace un request para obtener toda la lista')
      }) 
    } //el obtener toda la lista le falta el manejo de error del server
    
  getOneProduct<Producto>(id){
     return this.http.get(`${environment.url_endpoint}/productos/${id}`)
    } 
  updateProduct(producto,id){
     return this.http.put(`${environment.url_endpoint}/productos/${id}`,producto)
              .pipe(
                tap((response:Producto) => {
                  console.log(producto)
                  // Aquí puedes ejecutar otro método 
                  this.stateManagetService.editElement(id,producto);
                })
          ); //el udate producto esta haciendo el manejo del subscriba y el manejo de error desde el componente
             //pero podria hacer todo del servicio para seguir una coherencia desde dodne manejo las cosas
              // y ademas teniendo en cuenta que hago manejo global de los mensajes con alertify
    }
  deleteProducto(id){
     return this.http.delete(`${environment.url_endpoint}/productos/${id}`)
              .pipe(
                tap((response:Producto) => {
                  this.stateManagetService.deleteElement(id);
                })
              );
  }  //el delete producto hace subscripcion desde componente
    //se podria hacer subscripcion desde el servicio y manejo de error desde el servicio
    //ya que se va a manar un mensaje global desde aleryfy tanto si se elimina como si hubo error de server

  
}
