import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { FavPage } from '../pages/fav/fav';
import { AddPage } from '../pages/add/add';
import { InforumPage } from '../pages/inforum/inforum';
import { ForumPage } from '../pages/forum/forum';
import { BooksPage } from '../pages/books/books';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChatService } from '../providers/chatservice/chatservice';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { CartPage } from '../pages/cart/cart';
import { SellPage } from '../pages/sell/sell';
import { AddquestionPage } from '../pages/addquestion/addquestion';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    FavPage,
    AddPage,
    InforumPage,
    ForumPage,
    BooksPage,
    LoginPage,
    RegisterPage,
    ChatroomPage,
    CartPage,
    SellPage,
    AddquestionPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'} ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    FavPage,
    AddPage,
    InforumPage,
    ForumPage,
    BooksPage,
    LoginPage,
    RegisterPage,
    ChatroomPage,
    CartPage,
    SellPage,
    AddquestionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatService
  ]
})
export class AppModule {}
