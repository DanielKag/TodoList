import { Directive, ElementRef, Renderer, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[marker]'
})
export class MarkerDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  // Runs after the constructor was called and internal initialize.
  // Here we want to initialize data
  ngOnInit() {}

  @HostListener('mouseover')
  private setBackground() {
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseout')
  private removeBackground() {
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', '');
  }
}
