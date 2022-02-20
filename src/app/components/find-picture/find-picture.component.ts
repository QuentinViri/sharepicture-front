import { Component, OnInit } from '@angular/core';
import {PictureService} from "../../services/picture.service";
import {Picture} from "../../models/picture.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-find-picture',
  templateUrl: './find-picture.component.html',
  styleUrls: ['./find-picture.component.css']
})
export class FindPictureComponent implements OnInit {

  searchPicture: Picture = {
  };
  message = '';

  constructor(private pictureService: PictureService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load() : void {
    this.find(this.route.snapshot.params?.['name'])
  }

  find(name: string) : void {
    this.pictureService.findPicture(name)
      .subscribe(
        data => {
          this.searchPicture = data;
          console.log(this.searchPicture);
          console.log(this.route.snapshot.params?.['name']);
        },
        error => {
          console.log(error)
        }
      )
  }

}
