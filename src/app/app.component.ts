import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { Alert, AlertController } from 'ionic-angular';

import { MinesweeperController } from '../pages/minesweeper/minesweeper.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private rootPage: any = MinesweeperController;
  public pages: {title: string}[];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertController: AlertController) {
    platform.ready().then(() => {
      this.pages = [
        {title: 'Home'},
        {title: 'About'},
        {title: 'Contact'}
      ];
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  public openPage(p: {title: string}): void {
    const alert: Alert = this.alertController.create();
    alert.setTitle(p.title);
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        window.console.log('data', data);
      }
    });
    alert.present();
  }
}
