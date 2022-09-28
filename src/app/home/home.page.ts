import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) {}

  showLoader() {
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();
      this.getData().subscribe((data: any) => {
        console.log(data.mensaje);
        this.dismissLoader();
      });
    });
  }

  dismissLoader() {
    this.loadingController.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch((err) => {
      console.log('Error occured : ', err);
    });
  }

  getData() {
    return this.http.get('https://bconnectapitest.azurewebsites.net/Consumidores/HorarioVisitaRuta?numeroCelular=9991656778&latitud=21.028215&longitud=-89.690359');
  }

}
