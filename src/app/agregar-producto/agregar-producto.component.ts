import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms'
import { ProductosService } from '../services/productos.service';
import { CalculationsService } from '../services/calculations.service';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  
  sucess =false
  form: FormGroup
  private buildForm() {
    this.form = new FormGroup({
    	nombre : new FormControl(''),
  		precioCosto : new FormControl(''),
 		  porcentajeGanancia : new FormControl(''),
  		precioFinal : new FormControl(''),
    })	
  }
  constructor(private productosService:ProductosService,
              private caculationsService:CalculationsService) { 
  		this.buildForm();
  }

  ngOnInit(): void {
  	this.watchAndSetFinalPriceInputControl()
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    this.productosService.agregarProducto(value)
    .subscribe(
      producto =>{ 
        this.limpiarFormulario()
        this.sucess=true
        setTimeout(()=>{ this.sucess=false},2000)
      },
      error => {
          console.error('Error al agregar el producto:', error);
          alert('error en el servidor  al querer agregar  un producto a la lista de productos, pruebe mas tarde')
      })
  }

  limpiarFormulario(){
    this.form.get("nombre").setValue('')
    this.form.get("precioCosto").setValue('')
    this.form.get("porcentajeGanancia").setValue('')
    this.form.get("precioFinal").setValue('')
  }
  watchAndSetFinalPriceInputControl(){
    let precioCosto = this.form.get("precioCosto")
    let porcentajeGanancia = this.form.get("porcentajeGanancia")

  	this.form.get("porcentajeGanancia").valueChanges.subscribe(value=>{
      let CalculatedPrice = this.caculationsService.obtenerPrecioFinal( precioCosto.value,porcentajeGanancia.value )
      this.form.get("precioFinal").setValue(CalculatedPrice.toFixed(0))
    })    
       
  	this.form.get("precioCosto").valueChanges.subscribe(value=>{
  	  let CalculatedPrice = this.caculationsService.obtenerPrecioFinal( precioCosto.value,porcentajeGanancia.value )
      this.form.get("precioFinal").setValue(CalculatedPrice.toFixed(0))
    })  
  }
}
