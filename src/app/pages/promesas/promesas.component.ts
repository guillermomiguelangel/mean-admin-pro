import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise<string>((resolve, reject)=>{
    //   if(false){
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal')
    //   }
    // })

    // promesa.then(mensaje=>{
    //   console.log(mensaje);
    // })
    // .catch(err=> console.error(err))

    // console.log('fin init');

    this.getUsuarios().then((usuarios)=>{
      console.log(usuarios);
    })
    
  }

  getUsuarios(){
    return new Promise( resolve =>{
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve(body) ) 
    })
  }

}
