import { Injectable } from '@angular/core';

@Injectable()
export class PaiementPrincipal{

    public constructor(
                    public code:string,
                    public typeLot:string,
                    public seuilLot:number,
                    public montantAvance:number,
                    public lieuPaimenet:string,
                    public lieuAnnulation:string,
                    public delaiPurge:number
    ){}

}