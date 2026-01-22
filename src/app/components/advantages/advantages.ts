import { Component, HostListener, Input } from '@angular/core';
import { AdvantageType } from '../../types/advantage.type';
import { TextCroppingPipe } from '../../pipes/text-cropping-pipe';

@Component({
  selector: 'advantage',
  imports: [TextCroppingPipe],
  templateUrl: './advantages.html',
  styleUrl: './advantages.scss',
})
export class Advantages {
  @Input() advantage: AdvantageType;
  @Input() index: number = 0;
  showFullText: boolean = false;
  constructor() {
    this.advantage = {
      title: '',
      text: ''
    }
  }

  @HostListener('mouseover')
  onHover(){
    this.showFullText = true;
  }
  @HostListener('mouseout')
  onMouseOut(){
    this.showFullText = false;
  }
}
