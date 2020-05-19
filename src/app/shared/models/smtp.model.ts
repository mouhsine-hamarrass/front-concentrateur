
export class Smtp{
    public constructor(
                public code:string,
                public serverIp:string,
                public authentification:string,
                public statut:string,
                public login:string,
                public password:string
    ){}
}