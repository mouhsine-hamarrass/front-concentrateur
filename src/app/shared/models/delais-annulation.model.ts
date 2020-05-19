import { Injectable } from '@angular/core';

@Injectable()
export class DelaisAnnulation{
    public constructor(public code: string,
                       public description:string,
                       public valeur:number,
                       public statut:string){}
}