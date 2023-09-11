import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <!--
      <h1> Hola Counter !</h1>
      <hr>
    -->

    <h3>
      Counter: {{counter}}
    </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Resetear contador</button>
    <button (click)="increaseBy(-1)">-1</button>
    <p> </p>

  `
})

export class CounterComponent{
  // constructor() { }
  public counter: number = 10;

  // Hacemos que se pase el +1 o -1 como valor, de manera que se sume o reste a value
  increaseBy(value: number):void {
    this.counter = this.counter += value;
  }

  // Para resetear el contador a valor de 10
  resetCounter():void {
    this.counter = 10;
  }

}
