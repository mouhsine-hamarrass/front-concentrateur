import { Injectable } from '@angular/core';

@Injectable()
export class TypePdv{

    public constructor(
              public ref:number,
              public libelle:string,
              public nbrMaxTer:number,
              public plafond:number  
    ){

    }
}