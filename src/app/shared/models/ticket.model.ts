import { Injectable } from '@angular/core';

@Injectable()
export class Ticket{

    public constructor(public agence:string,
                       public pdv:string,
                       public nbrTicket:string,
                       public heure:string,
                       public reunoinCourseProduit:string,
                       public statut:string,
                       public enjeux:string ){}
}