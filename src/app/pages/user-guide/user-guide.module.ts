import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutModule } from 'src/app/layout/layout.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserGuidePageRoutingModule } from './user-guide-routing.module';
import { UserGuidePage } from './user-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LayoutModule,
    UserGuidePageRoutingModule
  ],
  declarations: [UserGuidePage]
})
export class UserGuidePageModule {}
