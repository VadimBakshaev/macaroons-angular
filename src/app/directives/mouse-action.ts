import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[mouseAction]',
})
export class MouseAction {
  @Output() hoverMouse: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverMouse.emit(true);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hoverMouse.emit(false);
  }
}
