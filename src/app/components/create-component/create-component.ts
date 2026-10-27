import { ChangeDetectorRef, Component } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public departamento!:Departamento;

  
  constructor(private _service: ServiceDepartamentos,private _cdr: ChangeDetectorRef) { 

  }
}
