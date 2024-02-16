import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{
    @ViewChild('slide', { read: ElementRef, static:false }) slide: any;
    constructor(private el: ElementRef) {
    }
slides = [
    '/assets/images/news/jason-dent-3wPJxh-piRw-unsplash.jpg',
    '/assets/images/carousel/eduardo-soares-utWyPB8_FU8-unsplash.jpg',
    '/assets/images/carousel/etienne-martin-2_K82gx9Uk8-unsplash.jpg',
    '/assets/images/news/miquel-parera-41J9-JTIP-c-unsplash.jpg',
]
    activeSlideIndex = 0;
    
    ngAfterViewInit() {
        this.slide.nativeElement.classList.add('active')
    }
    
    activeIndex(index:number){
    this.slide.nativeElement.classList.remove('active')
    setTimeout(()=>{
        this.activeSlideIndex = index;
        this.slide.nativeElement.classList.add('active')
    },500);
}

}
