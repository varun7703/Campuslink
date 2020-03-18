import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InforumPage } from './inforum';

@NgModule({
  declarations: [
    InforumPage,
  ],
  imports: [
    IonicPageModule.forChild(InforumPage),
  ],
})
export class InforumPageModule {}
