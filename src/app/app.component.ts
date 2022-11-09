import { Component } from '@angular/core';

type inputs = {
  titulo:string
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  title = 'Registro de usuario';
  mensaje = '';
  registrado = false;
  nombre = "";
  apellido = "";
  entradas: Array<inputs>;

  constructor() {
    this.entradas = [
      {titulo: "Python"},
      {titulo: "Java"},
      {titulo: "Angular"},
      {titulo: "JavaScript"},
    ]
  }

  registrarUsuario() {
    this.mensaje = "Ahora esta registrado!"
    this.registrado = true
  }
}
