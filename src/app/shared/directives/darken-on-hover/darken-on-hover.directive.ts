import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})

export class DarkenOnHoverDirective {
  @Input() opacity: number

  constructor(
    private el: ElementRef,
    private render: Renderer
  ) { }

  @HostListener('mouseover')
  mouseOver() {    
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.opacity * 100}%)`)
    this.render.setElementStyle(this.el.nativeElement, 'transition', '0.3s linear')
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')

  }
}
