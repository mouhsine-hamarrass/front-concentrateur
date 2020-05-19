import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module'
import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre.component';
import { PagePrincipaleModule } from './page-principale/page-principale.module';
import { AjoutProduitModule } from './ajout-produit/ajout-produit.module';
import { ValidationOffreModule } from './validation-offre/validation-offre.module'; 

@NgModule({
  imports: [
    CommonModule,
    OffreRoutingModule,
    SharedModule,
    PagePrincipaleModule,
    AjoutProduitModule,
    ValidationOffreModule
  ],
  declarations: [OffreComponent],
  entryComponents: [
  ]
})
export class OffreModule { }
