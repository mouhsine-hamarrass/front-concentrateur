import { Injectable } from '@angular/core';

@Injectable()
export class Terminal{
    public constructor(public type:string,
                       public position:number,
                       public ip:string,
                       public prepose:string,
                       public autoPaiment:boolean,
                       public autoAlloJeu:boolean){}
}