import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NsoTestPage } from './nso-test';

@NgModule({
  declarations: [
    NsoTestPage,
  ],
  imports: [
    IonicPageModule.forChild(NsoTestPage),
  ],
})
export class NsoTestPageModule {}
