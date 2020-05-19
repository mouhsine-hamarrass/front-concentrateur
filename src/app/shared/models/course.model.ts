
export class Course {

    public constructor(public reunion: string,
        public hippodrome: string,
        public courseOrder: string,
        public heureDepart: Date,
        public produit:string,
        public arrive:string,
        public etat:string,
        public color:string,
        public diffusion?:string,
        public nbrPartants?:number,
        public arriver?: string,
        public statut?:string){}
  }