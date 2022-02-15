import { Component, OnInit } from '@angular/core';
import {Picture} from "../../models/picture.model";
import {Subscription} from "rxjs";
import {PictureService} from "../../services/picture.service";

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css']
})
export class DiapoComponent implements OnInit{

  pictures: Picture[] = [];
  config: any;
  fullpage_api: any;
  images = [944, 1011, 984].map((n) => `https://localhost:8080/${n}`);

  private pictureSubscription: Subscription | undefined;

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.pictureService.getPictures();
    this.pictureSubscription = this.pictureService
      .getPicturesStream()
      .subscribe((pictures: Picture[]) => {
        this.pictures = pictures;
      });
  }

  ngOnDestroy(): void {
    this.pictureSubscription?.unsubscribe();
  }


}
