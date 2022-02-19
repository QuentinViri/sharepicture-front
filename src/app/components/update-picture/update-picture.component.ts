import { Component, OnInit } from '@angular/core';
import {Picture} from "../../models/picture.model";
import {PictureService} from "../../services/picture.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-update-picture',
  templateUrl: './update-picture.component.html',
  styleUrls: ['./update-picture.component.css']
})
export class UpdatePictureComponent implements OnInit {

  currentPicture: Picture = {
  };
  message = '';


  constructor(private pictureService : PictureService,
              private  route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.getPicture(this.route.snapshot.params?.['id']);
    this.message = '';

  }

  getPicture(_id: string) : void {
    this.pictureService.getPicture(_id)
      .subscribe(
        data => {
          this.currentPicture = data;
          console.log(data)
        },
      error => {
          console.log(error)
      }
      )
  }

  updatePicture(): void {
    this.message = '';
    this.pictureService.updatePicture(this.route.snapshot.params?.['id'], this.currentPicture)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This picture was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }




}
