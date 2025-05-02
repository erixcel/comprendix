import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items = [
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 1',
      description: 'Descripción breve del libro...'
    },
    {
      imageUrl: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2F%2F6c3ca796-9e64-469b-91cb-174938dcbbd4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALGcRYXodkbD17Qo7UwgDHKFY0dJBJhegmn8FB_B6WO9&exp=1746241892&osig=AAAAAAAAAAAAAAAAAAAAAPVG0yI_8mo37M-Czy9k41rw_hY4NY4G05jVEEcMVEAl&signer=media-rpc&x-canva-quality=thumbnail',
      title: 'Título del libro 2',
      description: 'Descripción breve del libro...'
    },
  ];
}
