import { NgModule } from '@angular/core';
import { NgbNav } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from '@angular/router';
import {UploadPictureComponent} from "./components/upload-picture/upload-picture.component";
import {PicturesListComponent} from "./components/pictures-list/pictures-list.component";
import {UpdatePictureComponent} from "./components/update-picture/update-picture.component";
import {DiapoComponent} from "./components/diapo/diapo.component";
import {FindPictureComponent} from "./components/find-picture/find-picture.component";


const routes: Routes = [
  { path: 'upload', component: UploadPictureComponent },
  { path: 'pictures', component: PicturesListComponent },
  { path: 'pictures/:id', component: UpdatePictureComponent },
  { path: 'diapo', component: DiapoComponent },
  { path: 'find', component: FindPictureComponent },
  { path: 'find/:name', component: FindPictureComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
