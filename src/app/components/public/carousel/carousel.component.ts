import {AfterViewInit, Component, OnInit, AfterViewChecked} from '@angular/core';
import {tns} from "tiny-slider";
import {Testimonial} from "../../../_models/testimonial";
import {TestimonialService} from "../../../_services/testimonial.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewChecked {
  testimonialList: Testimonial[] = [];
  sliderInitialized = false;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe(t => {
      this.testimonialList = t;
    });
  }

  ngAfterViewChecked(): void {
    if (!this.sliderInitialized && this.testimonialList.length) {
      this.initializeSlider();
    }
  }

  initializeSlider(): void {
    const slider = tns({
      container: '.testimonial-carousel',
      loop: false,  // Disable infinite loop
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
      nav: false,
      autoplay: false,  // Disable autoplay if you don't want continuous sliding
      mouseDrag: true,
      lazyload: true,
      gutter: 30,
      navPosition: 'bottom',
      controls: true,  // Enable controls for manual navigation
      speed: 800,
    });

    this.sliderInitialized = true;
  }
}
