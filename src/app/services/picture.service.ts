import { Injectable } from '@angular/core';
import {Picture} from "../models/picture.model";
import {Observable, Subject} from "rxjs";
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

  getPicture(id: any): Observable<Picture> {
    return this.http.get(`${this.url}/${id}`);
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

  deletePicture(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  updatePicture(id:any, data:any): Observable<any> {
    return this.http.put(`${this.url}/${id}`,data)
  }

  findPicture(data: any): Observable<any> {
    return this.http.get(`${this.url}/find`, data)
  }

}
