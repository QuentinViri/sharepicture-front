import { Component, OnInit } from '@angular/core';
import {Picture} from "../../models/picture.model";
import {Subscription} from "rxjs";
import {PictureService} from "../../services/picture.service";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css']
})
export class DiapoComponent implements OnInit{

  pictures : Picture[] = [];

  private pictureSubscription: Subscription | undefined;

  constructor(private pictureService: PictureService,
              private config: NgbCarouselConfig) {
    config.interval = 2000;
    config.showNavigationArrows = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

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
