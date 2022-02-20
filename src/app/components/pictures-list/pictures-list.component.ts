import {Component, OnDestroy, OnInit} from '@angular/core';
import {Picture} from "../../models/picture.model";
import {Subscription} from "rxjs";
import {PictureService} from "../../services/picture.service";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css'],
  providers: [NgbCarouselConfig]
})
export class PicturesListComponent implements OnInit, OnDestroy {

  pictures: Picture[] = [];
  currentPicture: Picture = {};
  searchPicture: Picture = {};
  currentIndex = -1;
  searchForm;

  private pictureSubscription: Subscription | undefined;

  constructor(private pictureService: PictureService,
              private config: NgbCarouselConfig,
              private  router: Router,
              private formBuilder : FormBuilder,
              private route: ActivatedRoute) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.searchForm = this.formBuilder.group({search:''});
  }

  ngOnInit(): void {
    this.pictureService.getPictures();
    this.pictureSubscription = this.pictureService
      .getPicturesStream()
      .subscribe((pictures: Picture[]) => {
        this.pictures = pictures;
      });
  }

  setActivePicture(picture: Picture, index: number): void {
    this.currentPicture = picture;
    this.currentIndex = index;
    console.log(this.currentPicture._id);
  }

  setSearchPicture(picture: Picture) : void {
    this.searchPicture = picture;
  }

  deletePicture() : void {
    this.pictureService.deletePicture(this.currentPicture._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list-pictures']);
        },
        error => {
          console.log(error)
        }
      )
  }



  ngOnDestroy(): void {
    this.pictureSubscription?.unsubscribe();
  }
}
