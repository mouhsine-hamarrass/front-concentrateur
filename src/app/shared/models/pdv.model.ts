import { Injectable } from '@angular/core';

@Injectable()
export class PDV{
    public constructor(public agence:string,
                       public pdv:string,
                       public ville:string,
                       public statut:string){

    }
}