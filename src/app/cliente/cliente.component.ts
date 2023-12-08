import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente.model';

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
      {id: 300,nombre: 'Juan1', direccion: ''},
      {id: 400,nombre: 'Pedro2', direccion: 'San Martin 450'},
      {id: 500,nombre: 'Juan3', direccion: ''},
      {id: 600,nombre: 'Pedro4', direccion: 'San Martin 450'},
    ];
  }
  
  agregarCliente(): void {
    this.clientes.push(
      {id: this.cliente.id,
        nombre: this.cliente.nombre, 
        direccion: this.cliente.direccion},
    );
  }

  eliminarCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(c => c !== cliente);
  }

  modificarCliente(cliente: Cliente): void {
    this.clientes[this.clientes.indexOf(cliente)] = {...this.cliente};
  }

}
