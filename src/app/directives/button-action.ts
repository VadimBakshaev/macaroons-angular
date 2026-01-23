import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[buttonAction]',
})
export class ButtonAction {
  @Input() buttonDefaultBg: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() buttonHoverBg: string = 'linear-gradient(90deg, rgb(215, 72, 92) 0%, rgb(113, 8, 30) 100%)';

  constructor(private elem: ElementRef) { }

  @HostListener('mouseover')
  onHover() {
    this.elem.nativeElement.style.backgroundImage = this.buttonHoverBg;
    this.elem.nativeElement.style.boxShadow = '0px 5px 9px 1px rgba(130, 19, 40, 0.5)';
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.elem.nativeElement.style.backgroundImage = this.buttonDefaultBg;
    this.elem.nativeElement.style.boxShadow = 'none';
  }
}
