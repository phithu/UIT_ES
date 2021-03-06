import { ExamSchedulePageModule } from './../pages/exam-schedule';
// Core Angular - Ionic
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Ionic Native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DatePicker } from '@ionic-native/date-picker';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';

// Module
import { BrowserModule } from '@angular/platform-browser';
import { HomePageModule } from '../pages/home';

// Page
import { MyApp } from './app.component';
import { PermissionModule } from '../module/permission-module';

//Service


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    ExamSchedulePageModule,
    PermissionModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    ThemeableBrowser,
    StatusBar,
    LocalNotifications,
    SplashScreen,
    DatePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}
