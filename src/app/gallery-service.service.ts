import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  constructor() { }
  key : string = "images"
  images : any [] = []

  getImages(){
    const images = localStorage.getItem(this.key);
    return images ? JSON.parse(images) : [];
  }

  saveImages(image_path:any){
    this.getImages()
    const image_url = URL.createObjectURL(image_path)
    this.images.push(image_url)
    const image = localStorage.setItem(this.key, JSON.stringify(this.images))

  }
}
