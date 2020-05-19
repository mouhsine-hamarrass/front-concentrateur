import { Injectable } from '@angular/core';

@Injectable()
export class Signal{
    public constructor(
                    public code:string,
                    public designation:string,
                    public source:number,
                    public type:string,
                    public diffusion:string
    ){}
}