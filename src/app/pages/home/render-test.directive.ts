import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRenderTest]'
})
export class RenderTestDirective {
  constructor(private renderer: Renderer2, private element: ElementRef) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
    this.renderer.createText('look, text!');
    this.renderer.addClass(this.element.nativeElement, 'lookingClass');

    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('I am dynamically created');

    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.element.nativeElement, p);
  }
}
