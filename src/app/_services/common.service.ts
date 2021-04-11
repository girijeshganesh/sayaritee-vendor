import { Injectable, NgZone } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public toastController: ToastController,) { }

  async presentToast(msg, duration = 0) {
    if (duration == 0) {
      duration = 2000;
    }
    const toast = await this.toastController.create({
      message: msg,
      duration: duration
    });
    toast.present();
  }
}
