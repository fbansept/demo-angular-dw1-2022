import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public texteBouton: string = "Clic ";
  public nombreClic: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBoutonclic() {
    this.nombreClic ++;
  }

}
