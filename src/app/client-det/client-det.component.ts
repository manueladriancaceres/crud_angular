import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../model/Cliente.model';

@Component({
  selector: 'app-client-det',
  templateUrl: './client-det.component.html',
  styleUrl: './client-det.component.css'
})

export class ClientDetComponent {

  @Input() cliente: Cliente = {id:0,nombre:'',direccion:''};
  @Output() agregar = new EventEmitter();


}
