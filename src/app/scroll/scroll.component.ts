import { Component, Input } from '@angular/core';

@Component({
  selector: 'scroll',
  template: `
    <a (click)="scroll(target)"><img src="assets/images/nature/6.jpg"></a>
    <td #target> <img class='news-photo' src="assets/images/nature/7.jpg" style="display: block; width: 100%;"></td>
  `,
})
export class ScrollComponent {
  scroll(element: HTMLElement) {
    element.scrollIntoView();
  }
}

// <slide (click)="scroll(target)">
//       <img class='img-carousel-size' src="assets/images/nature/7.jpg" alt="first slide" style="display: block; width: 100%;">
//       <div class="carousel-caption d-none d-md-block">
//         <h3>Mondo Cane</h3>
//         <p>Francesco Mota, 2017</p>
//       </div>
//     </slide>

// var element = document.getElementById("img-carousel-size");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({block: "end"});
// element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});