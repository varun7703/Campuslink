import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OuteventsPage } from './outevents';

@NgModule({
  declarations: [
    OuteventsPage,
  ],
  imports: [
    IonicPageModule.forChild(OuteventsPage),
  ],
})
export class OuteventsPageModule {}
