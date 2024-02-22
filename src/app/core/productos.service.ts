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
    }
  getAllProducts(){
      this.http.get(`${environment.url_endpoint}/productos/`)
      .subscribe( (value:Producto[]) =>{
        this.stateManagetService.getList(value)
        console.log('se consolea cada vez que se hace un request para obtener toda la lista')
      })
    }
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
          );
    }
  deleteProducto(id){
     return this.http.delete(`${environment.url_endpoint}/productos/${id}`)
              .pipe(
                tap((response:Producto) => {
                  this.stateManagetService.deleteElement(id);
                })
);

    }

  
}
