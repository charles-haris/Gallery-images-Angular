import { Component, inject, OnInit } from '@angular/core';
import { GalleryServiceService } from './gallery-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Image_galery';
  image_path:string | undefined
  gallery:any[] = []

  image_service = inject(GalleryServiceService)

  displayImage(){
    this.gallery = this.image_service.getImages()
  }

  ngOnInit() {
    this.displayImage()
  }

  image(event : any){
    this.image_path=event.target.files[0]


  }

  upload(){
    this.image_service.saveImages(this.image_path)
  }
}
