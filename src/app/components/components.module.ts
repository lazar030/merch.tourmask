import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PhotoGalleryComponent } from 'src/app/components/photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [PhotoGalleryComponent]
})
export class ComponentsModule { }
