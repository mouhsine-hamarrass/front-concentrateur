"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var  MENUITEMS = [ 
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
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    return MenuItems;
}());
MenuItems = __decorate([
    core_1.Injectable()
], MenuItems);
exports.MenuItems = MenuItems;
