import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages: {
    id: number;
    category: string;
    caption: string;
    url: string;
  }[] = IMAGES.slice(0);
  getImages() {
    return this.visibleImages;
  }
  getImage(id: number) {
    return IMAGES.slice(0).find((image) => image.id === id);
  }
}

const IMAGES = [
  {
    id: 1,
    category: 'Pistolas',
    caption: 'Usp Kill confirmed',
    url: 'assets/img/uspKillConfirme.png',
  },
  {
    id: 2,
    category: 'Pistolas',
    caption: 'Orion',
    url: 'assets/img/usporion.png',
  },
  {
    id: 3,
    category: 'Pistolas',
    caption: 'USPs The Traitor',
    url: 'assets/img/USPs The Traitor.png',
  },
  {
    id: 4,
    category: 'Pistolas',
    caption: 'printstream',
    url: 'assets/img/printstream.png',
  },
  {
    id: 5,
    category: 'Pistolas',
    caption: 'neoNoir',
    url: 'assets/img/neoNoir.png',
  },
  {
    id: 6,
    category: 'Luvas',
    caption: 'vice',
    url: 'assets/img/vice.png',
  },
  {
    id: 7,
    category: 'Luvas',
    caption: 'kingSnake',
    url: 'assets/img/kingSnake.png',
  },
  {
    id: 8,
    category: 'Luvas',
    caption: 'fade',
    url: 'assets/img/fade.png',
  },
  {
    id: 9,
    category: 'Luvas',
    caption: 'transport',
    url: 'assets/img/transport.png',
  },
  {
    id: 10,
    category: 'Luvas',
    caption: 'convoy',
    url: 'assets/img/convoy.png',
  },
];
