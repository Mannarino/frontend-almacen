import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() { }
  obtenerPrecioFinal(precioCosto,porcentajeGanado){
  
  	if(porcentajeGanado<10){
  		let porcentajeACalcular ="1.0"+porcentajeGanado
  		let porcentajeACalcularConvertido = Number(porcentajeACalcular)
  	  let precioFinal = precioCosto * porcentajeACalcularConvertido
	  console.log('anda el servicio calculations')
      return precioFinal
  	    
  	}else{
  		let porcentajeACalcular ="1."+porcentajeGanado
  		let porcentajeACalcularConvertido = Number(porcentajeACalcular)
  		let precioFinal = precioCosto * porcentajeACalcularConvertido
		console.log('anda el servicio calculations')
      return precioFinal
  	  
    }
  } 
}
