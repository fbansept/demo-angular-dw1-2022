import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-carte-utilisateur',
  templateUrl: './carte-utilisateur.component.html',
  styleUrls: ['./carte-utilisateur.component.scss']
})
export class CarteUtilisateurComponent implements OnInit {

  @Input()
  public utilisateur: Utilisateur = {
    nom: "",
    prenom: "",
    mot_de_passe: "",
    image: "",
    competences: []
  }

  @Output("delete")
  public evenementDelete: EventEmitter<Utilisateur> = new EventEmitter();

  public adresseServeur = environment.adresseServeur;

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.evenementDelete.emit(this.utilisateur);
  }


}
