import { Injectable } from '@angular/core';

@Injectable()
export class Voucher{

    public constructor(public agence:string,
                       public pdv:string,
                       public numero:string,
                       public heure:string,
                       public valeur:string,
                       public statut:string ){}
}