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

  eliminarElemento(indice: number): void {
    const listaActual = this.listaSubject.getValue();
    listaActual.splice(indice, 1);
    this.listaSubject.next(listaActual);
  }
}
