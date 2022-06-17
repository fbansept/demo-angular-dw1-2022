import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-page-resultat-recherche',
  templateUrl: './page-resultat-recherche.component.html',
  styleUrls: ['./page-resultat-recherche.component.scss']
})
export class PageResultatRechercheComponent implements OnInit {

  public listeUtilisateur: any = [];
  public adresseServeur = environment.adresseServeur;

  constructor(
    private route: ActivatedRoute,
    private client: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametres => {
        this.client.get(
          "http://" + environment.adresseServeur + "recherche.php"
          + "?recherche=" + parametres['recherche'])

          .subscribe(reponse => this.listeUtilisateur = reponse)

      }
    )
  }

  rechargerListeUtilisateur() {
    this.client
      .get("http://" + environment.adresseServeur + "liste-utilisateur.php")
      .subscribe(reponse => this.listeUtilisateur = reponse)
  }

  onClicDeleteUtilisateur(utilisateur: Utilisateur) {
    this.client
      .get("http://" + environment.adresseServeur + "supprime-utilisateur.php?id=" + utilisateur.id)
      .subscribe(reponse => this.rechargerListeUtilisateur())
  }

}
