import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../core/productos.service';
import { StateManagetService } from '../core/state-managet.service';
import { Producto } from '../interfaces/producto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'searcher';
  public search: string = '';
  lista: Producto[];
  constructor(private productosService:ProductosService,
              private managetStateService:StateManagetService) { }

  ngOnInit(): void {
    this.managetStateService.lista$.subscribe(lista => {
      this.lista = lista;
    });
  }
  
  onSearchProducto( search: string ) {
    this.search = search;
  }
   eliminar(id){
     this.productosService.deleteProducto(id)
   }
}
