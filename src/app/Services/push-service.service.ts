import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class PushServiceService {

  constructor(private oneSignal: OneSignal,
              private storage:Storage) { }

  configurationInicial(){
    this.oneSignal.startInit('23b0e319-48c4-454f-96b0-b4e29c5334e2', '42415093087');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.getIds().then(info => {
      this.storage.set('id_onesignal',info.userId)
    })

    this.oneSignal.endInit();
  }
}
