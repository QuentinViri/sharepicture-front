import { NgModule } from '@angular/core';
import { NgbNav } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from '@angular/router';
import {UploadPictureComponent} from "./components/upload-picture/upload-picture.component";
import {PicturesListComponent} from "./components/pictures-list/pictures-list.component";

const routes: Routes = [
  { path: 'upload', component: UploadPictureComponent },
  { path: 'list-pictures', component: PicturesListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
