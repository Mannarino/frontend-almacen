import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'searcher';
  public search: string = '';
  public lista;
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    //obtengo todos los productos y los cargo en la propiedad lista para pintarlos en la vista
    this.productosService.getAllProducts()
     .subscribe(value =>{ this.lista = value})
  }
  
  onSearchProducto( search: string ) {
    this.search = search;
  }
   eliminar(id){
     this.productosService.deleteProducto(id)
     .subscribe(value => {
      //elimino (el producto eliminado en el backend) de la lista de productos descargada en local
       let productIndex = this.lista.findIndex(item => item._id === id)
       this.lista.splice(productIndex,1)
       })
   }
}
