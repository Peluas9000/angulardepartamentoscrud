import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public arrayDepartamentos!: Array <Departamento>;
  constructor(private _service: ServiceDepartamentos,private _cdr: ChangeDetectorRef) {
  
  }

  async ngOnInit(): Promise<void> {
    this.arrayDepartamentos = await this._service.getDepartamentos();
    this._cdr.detectChanges();
  }

  
}
