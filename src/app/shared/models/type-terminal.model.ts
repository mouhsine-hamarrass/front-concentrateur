import { Injectable } from '@angular/core';

@Injectable()
export class TypeTerminal{

    public constructor(
                public code:number,
                public libelle:string
    ){}
}