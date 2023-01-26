import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnChanges {
  title = 'Mais recentes';
  @Input() filterBy: string = 'todas';
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages().filter((image) => {
      return this.filterBy === 'todas' || image.category === this.filterBy;
    });
  }
}
