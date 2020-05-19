import { Injectable } from '@angular/core';

@Injectable()
export class GenerauxTerminaux{

    public constructor(public pdv:string,
                       public position:string,
                       public ip:string,
                       public autoPaiement:boolean,
                       public autoCreation:boolean){}
} 