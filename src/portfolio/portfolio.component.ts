import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  flag: boolean = false
  selectedImageSrc: any ;
  images = [
    './poert1.png',
    './port2.png',
    './port3.png',
    './poert1.png',
    './port2.png',
    './port3.png'
  ]
  check(e: MouseEvent): void {
    this.flag = true
    console.log("done");
    this.getImageSrc(e); 
  }


  getImageSrc(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    this.selectedImageSrc=target.querySelector('img')?.getAttribute('src')
    
  }
 
  closeContentOverlay(e: MouseEvent) {
    if(e.currentTarget == e.target){
      this.flag = false
    }
  }
}
