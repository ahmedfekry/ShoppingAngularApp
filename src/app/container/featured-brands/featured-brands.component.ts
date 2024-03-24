import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-brands',
  templateUrl: './featured-brands.component.html',
  styleUrl: './featured-brands.component.css'
})
export class FeaturedBrandsComponent {
  
  @ContentChild('paragraphRef') ElementRef : ElementRef;
  GetParagraph(){
    console.log(this.ElementRef.nativeElement);
  }
}
