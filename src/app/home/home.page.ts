import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonList, 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonImg
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonImg
  ]
})
export class HomePage {
  lista = [
    {
      titulo: 'Montanha',
      imagem: 'assets/Montanha.jpg'
    },
    {
      titulo: 'Praia',
      imagem: 'assets/Praia.jpg'
    },
    {
      titulo: 'Floresta',
      imagem: 'assets/Floresta.jpg'
    },
    {
      titulo: 'Cidade',
      imagem: 'assets/Cidade.jpg'
    }
  ];
}