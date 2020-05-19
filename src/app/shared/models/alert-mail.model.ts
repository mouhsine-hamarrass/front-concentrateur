import { Injectable } from '@angular/core';

@Injectable()
export class AlertMailModel{
    public constructor(public typeAlert:string,
                       public objet:string,
                       public adressMail:string){

    }
}