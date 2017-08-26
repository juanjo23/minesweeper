import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MineController } from '../pages/minesweeper/mine/mine.component';
import { MinesweeperController, ModalContentPage } from '../pages/minesweeper/minesweeper.component';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    MinesweeperController,
    MineController,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MinesweeperController,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
