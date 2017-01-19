import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }
}
