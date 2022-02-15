import {Component, OnDestroy, OnInit} from '@angular/core';
import {Picture} from "../../models/picture.model";
import {Subscription} from "rxjs";
import {PictureService} from "../../services/picture.service";

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit, OnDestroy {

  pictures: Picture[] = [];

  private pictureSubscription: Subscription | undefined;

  constructor(private pictureService: PictureService) { }

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