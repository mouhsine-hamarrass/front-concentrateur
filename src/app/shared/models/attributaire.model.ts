import { Injectable } from '@angular/core';

@Injectable()
export class AttributaireModel{

    public constructor(public code:number,
                       public libelle:string,
                       public produitma:string,
                       public produitfr:string){

    }
}