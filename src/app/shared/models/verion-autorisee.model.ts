import { Injectable } from '@angular/core';

@Injectable()
export class VersionAutorisee{
    public constructor(
                public ref:string,
                public typeTerminal:string,
                public version:string,
                public date:Date
    ){}
}