import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceDepartamentos {
    url =environment.apiDepartamentos;
    constructor(private http:HttpClient) {
    }

   async getDepartamentos(): Promise<Departamento[]> {
    let request="api/departamentos";
    let url=environment.apiDepartamentos+request;
    return firstValueFrom(this.http.get<Departamento[]>(url));
}

async getDepartamento(departamento:Departamento): Promise<any> { 
let json=JSON.stringify(departamento);
let header=new HttpHeaders();
header=header.set("content-type","application/json");
let request="api/departamentos";

return firstValueFrom(this.http.post(this.url+request,json,{headers:header}));
}
}