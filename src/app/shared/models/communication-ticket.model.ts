import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationTicket {

    public constructor( 
        public date:Date,
        public objectMessage:string,
        public general:boolean,
        public individuel: boolean,
        public etat:boolean,
        public dateDebut:Date,
        public dateFin:Date
     ){}
}