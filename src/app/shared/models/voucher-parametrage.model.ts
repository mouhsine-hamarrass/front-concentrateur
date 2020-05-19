import { Injectable } from '@angular/core';

@Injectable()
export class VoucherParametrage{
    public constructor(
                public statut:string,
                public voucherSeuil:number,
                public plafond:number,
                public delaisPurge:number,
                public lieuPaimement:string
    ){}
}