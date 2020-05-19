import { Injectable } from '@angular/core';

@Injectable()
export class ProduitConcentrateur{

    public constructor(
                       public identifiant:number,
                       public designation:string,
                       public libelle:string,
                       public enjeuMin:number,
                       public enjeuMax:number,
                       public order:boolean,
                       public nbChBase:number,
                       public nbMinPart:number,
                       public champX:boolean,
                       public express:boolean,
                       public statut:boolean
    ){}
}