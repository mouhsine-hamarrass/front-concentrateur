import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [ 
  {
    label: 'Home',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
    ],
  },
  {
    label: 'offre',
    main: [
      {
        state: 'offre',
        name: 'Offre',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'page-principale',
            name: 'Page Principale'
          },
          {
            state: 'ajout-produit',
            name: 'Ajout Produit'
          },
          {
            state: 'validation-offre',
            name: 'Validation Offre'
          }
        ]
      }
    ]
  },
  {
    label: 'pilotage',
    main: [
      {
        state: 'pilotage',
        name: 'Pilotge',
        type: 'link',
        icon: 'ti-crown'
      }
    ]
  },
  {
    label: 'supervision',
    main: [
      {
        state: 'supervision',
        name: 'Supervision',
        type: 'link',
        icon: 'ti-shield'
      }
    ]
  },
  {
    label: 'Gestion PDV',
    main: [
      {
        state: 'pdv',
        name: 'Gestion PDV',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'point-de-vente',
            name: 'PDV'
          },
          {
            state: 'terminaux',
            name: 'Terminaux'
          }
        ]
      }
    ]
  },
  {
    label: 'TFJ',
    main: [
      {
        state: 'TFJ',
        name: 'Traitement Fin Journee',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  },
  {
    label: 'Communication',
    main: [
      {
        state: 'communication',
        name: 'Communication',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'message-ticket',
            name: 'Message Ticket'
          },
          {
            state: 'message-terminaux',
            name: 'Message Terminaux'
          }
        ]
      }
    ]
  },{
    label: 'parametrage',
    main: [
      {
        state: 'parametrage',
        name: 'Parametrage',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'alert-mail',
            name: 'Alert Mail'
          },
          {
            state: 'attributaire',
            name: 'Attributaire'
          },
          {
            state: 'commande-sensible',
            name: 'Commandes Sensibles'
          },
          {
            state: 'delais-annulation',
            name: 'Delais Annulation'
          },
          {
            state: 'generaux-terminal',
            name: 'Parametrage généraux terminaux '
          },
          {
            state: 'hippodrome',
            name: 'Hippodrome'
          },
          {
            state: 'maj-logiciel-terminaux',
            name: 'Mise à jour terminal (logiciel)'
          },
          {
            state: 'paiement-lot',
            name: 'Paiement Lot'
          },
          {
            state: 'produit-concentrateur',
            name: 'Produit'
          },
          {
            state: 'signaux',
            name: 'Signuax'
          },
          {
            state: 'smtp',
            name: 'Smtp'
          },
          {
            state: 'type-pdv',
            name: 'Type PDV'
          },
          {
            state: 'type-terminal',
            name: 'Type Terminal'
          },
          {
            state: 'voucher',
            name: 'Voucher'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
