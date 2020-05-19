import { Injectable } from '@angular/core';

@Injectable()
export class ChargementVersion{
    public constructor(
                    public ref:string,
                    public libelle:string,
                    public version:string,
                    public date:Date,
                    public file:string
    ){

    }
}