import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[buttonAction]',
})
export class ButtonAction implements OnInit{

  constructor(private elem:ElementRef) { }

  ngOnInit(): void {
    this.elem.nativeElement.style.boxShadow = 'none';
  }

  @HostListener('mouseover')
  onHover(){
    this.elem.nativeElement.style.boxShadow = '0px 5px 9px 1px rgba(130, 19, 40, 0.5)';
  }
  @HostListener('mouseout')
  onMouseOut(){
    this.elem.nativeElement.style.boxShadow = 'none';
  }
}
