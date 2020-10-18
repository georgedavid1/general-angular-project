import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {
  //while this is cool, this is just a glorified css attribute hover
  //ChangeDetectorRef
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }
  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'background-color'
    );
  }
}
