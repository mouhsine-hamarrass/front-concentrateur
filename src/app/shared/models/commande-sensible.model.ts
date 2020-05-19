import { Injectable } from '@angular/core';

@Injectable()
export class CommandeSensible{
    public constructor(public code:string,
                       public libelle:string){}
}