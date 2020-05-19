import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProduitConcentrateur } from 'src/app/shared/models/produit.model';

@Component({
  selector: 'app-produit-concentrateur',
  templateUrl: './produit-concentrateur.component.html',
  styleUrls: ['./produit-concentrateur.component.scss']
})
export class ProduitConcentrateurComponent implements OnInit {

  newProduitConcentrateur:boolean = false;
  displayedColumns: string[] = ['identifiant', 'designation', 'libelle',  'enjeuMin', 'enjeuMax','order','nbChBase','nbMinPart','champX','express','statut','action'];
  dataSource: MatTableDataSource<ProduitConcentrateur>;
  produitConcentrateurs:Array<ProduitConcentrateur>;

  constructor() { } 

  ngOnInit() {
    this.createProduitConcentrateurService();
    this.dataSource = new MatTableDataSource(this.produitConcentrateurs);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayNewProduitConcentrateur(){
    this.newProduitConcentrateur = !this.newProduitConcentrateur;
  }

  createProduitConcentrateurService(){
    this.produitConcentrateurs = [];
    let produitConcentrateur1:ProduitConcentrateur = new ProduitConcentrateur(1,'Simple Gagnant','GAG',12,null,false,1,null,false,false,false);
    let produitConcentrateur2:ProduitConcentrateur = new ProduitConcentrateur(1,'Quinté +','QIP',12,null,true,1,null,true,true,true);
    let produitConcentrateur3:ProduitConcentrateur = new ProduitConcentrateur(1,'Simple Gagnant','GAG',12,null,false,1,null,false,false,false);
    this.produitConcentrateurs.push(produitConcentrateur1);
    this.produitConcentrateurs.push(produitConcentrateur2);
    this.produitConcentrateurs.push(produitConcentrateur3);
  }

}
