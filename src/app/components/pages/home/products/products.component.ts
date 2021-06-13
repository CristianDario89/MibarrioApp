import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imageObject: Array<object> = [{
    image: 'assets/img/productsAll/3.jpg',
    thumbImage: 'assets/img/productsAll/3.jpg',
    alt: 'Mascotas',
    title: 'Mascotas'
}, {
    image: 'assets/img/productsAll/2.jpg', // Support base64 image
    thumbImage: 'assets/img/productsAll/2.jpg', // Support base64 image
    title: 'Polleria', //Optional: You can use this key if want to show image with title
    alt: 'Polleria' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/img/productsAll/1.jpg',
  thumbImage: 'assets/img/productsAll/1.jpg',
  alt: 'alt of image',
  title: 'Kiosko'
}, {
  image: 'assets/img/productsAll/4.jpg', // Support base64 image
  thumbImage: 'assets/img/productsAll/4.jpg', // Support base64 image
  title: 'Remiseria', //Optional: You can use this key if want to show image with title
  alt: 'Remiseria' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/img/productsAll/5.jpg',
  thumbImage: 'assets/img/productsAll/5.jpg',
  alt: 'Muebleria',
  title: 'Muebleria'
}, {
  image: 'assets/img/productsAll/6.jpg', // Support base64 image
  thumbImage: 'assets/img/productsAll/6.jpg', // Support base64 image
  title: 'Ropa', //Optional: You can use this key if want to show image with title
  alt: 'Ropa' //Optional: You can use this key if want to show image with alt
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
