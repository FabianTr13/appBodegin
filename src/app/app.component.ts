import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushServiceService } from './Services/push-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push:PushServiceService
  ) {
    this.initializeApp();
    this.statusBar.overlaysWebView(true);
    // this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#1d62dd');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.push.configurationInicial();
    });
  }
}
