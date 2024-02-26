import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../core/productos.service';
import { StateManagetService } from '../core/state-managet.service';
import { Producto } from '../interfaces/producto';
import { MemoryService } from '../login/memory.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'searcher';
  public search: string = '';
  lista: Producto[];
  logueado=false
  constructor(private productosService:ProductosService,
              private managetStateService:StateManagetService,
              private memoryService:MemoryService) { }

  ngOnInit(): void {
    this.managetStateService.lista$.subscribe(lista => {
      this.lista = lista;
    });
    this.logueado=this.memoryService.checkLogin()
  }
  
  onSearchProducto( search: string ) {
    this.search = search;
  }
   eliminar(id){
     this.productosService.deleteProducto(id)
   }
}
