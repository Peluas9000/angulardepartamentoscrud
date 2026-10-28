import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public departamento!:Departamento;
  public mensaje!:string;
  @ViewChild("cajaId") cajaId!:ElementRef;
  @ViewChild("cajaNombre") cajaNombre!:ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!:ElementRef;

  
  constructor(private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef,
    private _router: Router) { 
    
  }

  async insertarDepartamento(){
    let id=parseInt(this.cajaId.nativeElement.value);
    let nombre=this.cajaNombre.nativeElement.value;
    let localidad=this.cajaLocalidad.nativeElement.value;

    this.departamento=new Departamento(id,nombre,localidad);
    let response=await this._service.createDepartamento(this.departamento);
    console.log(response);
    this.mensaje="Departamento insertado correctamente";
    this._cdr.detectChanges();
    this._router.navigate(['/']);

  }


}
