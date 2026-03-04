import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {

}
