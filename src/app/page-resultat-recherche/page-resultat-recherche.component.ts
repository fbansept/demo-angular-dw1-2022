import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-resultat-recherche',
  templateUrl: './page-resultat-recherche.component.html',
  styleUrls: ['./page-resultat-recherche.component.scss']
})
export class PageResultatRechercheComponent implements OnInit {

  public listeUtilisateur: any = [];

  constructor(
    private route: ActivatedRoute,
    private client: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametres => {
        this.client.get(
          "http://localhost/backend-angular-dw1-22/recherche.php"
          + "?recherche=" + parametres['recherche'])

          .subscribe(reponse => this.listeUtilisateur = reponse)

      }
    )
  }

  rechargerListeUtilisateur() {
    this.client
      .get("http://localhost/backend-angular-dw1-22/liste-utilisateur.php")
      .subscribe(reponse => this.listeUtilisateur = reponse)
  }

  onClickDelete(idUtilisateur: number) {
    this.client
      .get("http://localhost/backend-angular-dw1-22/supprime-utilisateur.php?id=" + idUtilisateur)
      .subscribe(reponse => this.rechargerListeUtilisateur())
  }

}
