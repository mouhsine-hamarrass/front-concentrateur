import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'parametrage', 
      status: false
    },
    children:[
      {
        path: 'alert-mail',
        loadChildren: () => import ('./alert-mail/alert-mail.module').then(m => m.AlertMailModule)
      },{
        path: 'attributaire',
        loadChildren: () => import ('./attributaire/attributaire.module').then(m => m.AttributaireModule)
      },{
        path: 'commande-sensible',
        loadChildren: () => import ('./commande-sensible/commande-sensible.module').then(m => m.CommandeSensibleModule)
      },{
        path: 'delais-annulation',
        loadChildren: () => import ('./delais-annulation/delais-annulation.module').then(m => m.DelaisAnnulationModule)
      },{
        path: 'generaux-terminal',
        loadChildren: () => import ('./generaux-terminal/generaux-terminal.module').then(m => m.GenerauxTerminalModule)
      },{
        path: 'hippodrome',
        loadChildren: () => import ('./hippodrome/hippodrome.module').then(m => m.HippodromeModule)
      },{
        path: 'maj-logiciel-terminaux',
        loadChildren: () => import ('./maj-logiciel-terminal/maj-logiciel-terminal.module').then(m => m.MajLogicielTerminalModule)
      },{
        path: 'paiement-lot',
        loadChildren: () => import ('./paiement-lot/paiement-lot.module').then(m => m.PaiementLotModule)
      },{
        path: 'produit-concentrateur',
        loadChildren: () => import ('./produit-concentrateur/produit-concentrateur.module').then(m => m.ProduitConcentrateurModule)
      },{
        path: 'signaux',
        loadChildren: () => import ('./signaux/signaux.module').then(m => m.SignauxModule)
      },{
        path: 'smtp',
        loadChildren: () => import ('./smtp/smtp.module').then(m => m.SmtpModule)
      },{
        path: 'type-pdv',
        loadChildren: () => import ('./type-pdv/type-pdv.module').then(m => m.TypePdvModule)
      },{
        path: 'type-terminal',
        loadChildren: () => import ('./type-terminal/type-terminal.module').then(m => m.TypeTerminalModule)
      },{
        path: 'voucher',
        loadChildren: () => import ('./voucher/voucher.module').then(m => m.VoucherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrageRoutingModule { }

