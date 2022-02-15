import { Injectable } from '@angular/core';
import {Picture} from "../models/picture.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private pictures: Picture[] = [];
  private picture = new Subject<Picture[]>();
  readonly url = "http://localhost:8080/api/pictures"

  constructor(private http : HttpClient) { }

  getPictures() {
    this.http
      .get<{pictures: Picture[] }>(this.url)
      .pipe(
        map((pictureData) => {
          return pictureData.pictures;
        })
      )
      .subscribe((pictures) => {
        this.pictures = pictures;
        this.picture.next(this.pictures);
      })
  }

  getPicturesStream() {
    return this.picture.asObservable();
  }

  addPicture(name: string, image: File): void {
    const pictureData = new FormData();
    pictureData.append("name", name);
    pictureData.append("image", image, name);
    this.http
      .post<{ picture: Picture }>(this.url, pictureData)
      .subscribe((pictureData) => {
        const picture: Picture = {
          _id: pictureData.picture._id,
          name: name,
          imagePath: pictureData.picture.imagePath,
        };
        this.pictures.push(picture);
        this.picture.next(this.pictures);
      });
  }
}
