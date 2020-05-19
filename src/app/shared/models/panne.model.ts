import { Injectable } from '@angular/core';


@Injectable()
export class Panne{

    public constructor(
            public agence:string,
            public pdv:string,
            public terminal:string,
            public panne:string,
            public heure:string
    ){}

}