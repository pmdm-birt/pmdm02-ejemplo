import { GestionPersonasService } from './../../servicios/gestion-personas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public gestionPersonas: GestionPersonasService) {}

}