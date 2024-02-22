import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';
@Injectable({
  providedIn: 'root'
})
export class StateManagetService {
  private listaSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  public lista$: Observable<Producto[]> = this.listaSubject.asObservable();

  constructor() { }

  actualizarLista(nuevaLista: Producto[]): void {
    this.listaSubject.next(nuevaLista);
  }

  agregarElemento(elemento: Producto): void {
    const listaActual = this.listaSubject.getValue();
    const nuevaLista = [...listaActual, elemento];
    this.listaSubject.next(nuevaLista);
  }

  eliminarElemento(id: string): void {
    const listaActual = this.listaSubject.getValue();
    const indice = listaActual.findIndex(producto => producto._id === id);
    if (indice !== -1) {
      const nuevaLista = listaActual.filter(producto => producto._id !== id);
      this.listaSubject.next(nuevaLista);
    } else {
      console.error('Elemento no encontrado en la lista');
    }
  }
  
 
  editarElemento(id: string, nuevoProducto: Producto): void {
    const listaActual = this.listaSubject.getValue();
    console.log('Lista actual:', listaActual);
    
    const indice = listaActual.findIndex(producto => producto._id === id);
    console.log('Índice encontrado:', indice);
    
    if (indice !== -1) {
      const listaActualizada = [...listaActual]; // Crear una nueva lista para no mutar la original
      listaActualizada[indice] = { ...listaActualizada[indice], ...nuevoProducto }; // Actualizar el producto
      console.log('lista actyalizada',listaActualizada)
      this.listaSubject.next(listaActualizada);
    } else {
      console.error('Elemento no encontrado en la lista');
    }
  }
  
}
