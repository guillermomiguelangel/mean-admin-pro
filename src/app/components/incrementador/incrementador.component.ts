import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent {
  // renombrar argumento
  // @Input('renombre') progreso:number = 50;
  @Input() progreso:number = 0;
  @Output() porcentaje : EventEmitter<number> = new EventEmitter();

  cambiarValor(valor:number){ 

    if(this.progreso >= 100 && valor >= 0){
      this.porcentaje.emit(100)
      this.progreso = 100;
      return
    }

    if(this.progreso <= 0 && valor <= 0){
      this.porcentaje.emit(0);
      this.progreso = 0;
      return
    }

    this.progreso = this.progreso + valor;
    this.porcentaje.emit( this.progreso );
  }

  onChange( valor: number ){
    
    if( valor >= 100){
      this.progreso = 100
    } else if (valor <= 0) {
      this.progreso = 0
    } else {
      this.progreso = valor
    }

    this.porcentaje.emit( this.progreso );
  }
}
