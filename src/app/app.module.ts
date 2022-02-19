import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';
import { PicturesListComponent } from './components/pictures-list/pictures-list.component';
import { DiapoComponent } from './components/diapo/diapo.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { UpdatePictureComponent } from './components/update-picture/update-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadPictureComponent,
    PicturesListComponent,
    DiapoComponent,
    UpdatePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
