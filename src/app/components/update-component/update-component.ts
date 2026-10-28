import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit {

    public departamento!:Departamento;
    @ViewChild("cajaId") cajaId!:ElementRef;
    @ViewChild("cajaNombre") cajaNombre!:ElementRef;
    @ViewChild("cajaLocalidad") cajaLocalidad!:ElementRef;
    constructor(private _service: ServiceDepartamentos,
      private _cdr: ChangeDetectorRef,
      private _router: Router,
      private _activeRouter: ActivatedRoute){}

  

    async ngOnInit(): Promise<void> {
      this._activeRouter.params.subscribe(async(params)=>{
        let id=parseInt(params['id']);
        this.departamento=await this._service.findDepartamentoById(id);
        this._cdr.detectChanges();
        
      });

    }


    async updateDepartamento(){
      let id=parseInt(this.cajaId.nativeElement.value);
      let nombre=this.cajaNombre.nativeElement.value;
      let localidad=this.cajaLocalidad.nativeElement.value;
      let dep=new Departamento(id,nombre,localidad);
      this.departamento=new Departamento(id,nombre,localidad);
      let reponse = await this._service.updateDepartamentoAsync(this.departamento);
      console.log(reponse);
      this._router.navigate(['/details',dep.numero,dep.nombre,dep.localidad]);

    }


   

  
}
