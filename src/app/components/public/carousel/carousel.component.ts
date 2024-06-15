import {AfterViewInit, Component} from '@angular/core';
import {tns} from "tiny-slider";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const slider = tns({
      container: '.testimonial-carousel',
      loop: true,
      items: 3,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      },
      slideBy: 'page',
      nav: true,
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 30,
      navPosition: 'bottom',
      controls: false,
      speed: 800,
    });
  }
}
