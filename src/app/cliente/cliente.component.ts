import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit{
  clientes: Cliente[] = [];
  cliente: Cliente = {id:0,nombre:'',direccion:''}

  ngOnInit(): void {
    this.clientes = [
      {id: 100,nombre: 'Juan', direccion: ''},
      {id: 200,nombre: 'Pedro', direccion: 'San Martin 450'},
    ];
  }
  
  agregarCliente(): void {
    this.clientes.push(
      {id: this.cliente.id,
        nombre: this.cliente.nombre, 
        direccion: this.cliente.direccion},
    );
  }
}
