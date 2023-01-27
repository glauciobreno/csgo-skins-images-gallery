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
    return IMAGES.slice(0).find((image) => image.id == id);
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
    url: 'assets/img/thetraitor.png',
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
  {
    id: 11,
    category: 'Rifles',
    caption: 'Awp containment Breach',
    url: 'assets/img/containment.png',
  },
  {
    id: 12,
    category: 'Rifles',
    caption: 'Awp neo noir',
    url: 'assets/img/awpneonoir.png',
  },
  {
    id: 13,
    category: 'Rifles',
    caption: 'Awp hyper beast',
    url: 'assets/img/hyper.png',
  },
  {
    id: 14,
    category: 'Rifles',
    caption: 'Awp aberration',
    url: 'assets/img/aberration.png',
  },
  {
    id: 15,
    category: 'Facas',
    caption: 'Huntsman knife doppler',
    url: 'assets/img/huntsman.png',
  },
  {
    id: 16,
    category: 'Facas',
    caption: 'Karambit lore',
    url: 'assets/img/karambit.png',
  },
  {
    id: 17,
    category: 'Facas',
    caption: 'Falchion Tiger tooth',
    url: 'assets/img/tiger.png',
  },
  {
    id: 18,
    category: 'Facas',
    caption: 'Bayonet',
    url: 'assets/img/bayonet.png',
  },
];
