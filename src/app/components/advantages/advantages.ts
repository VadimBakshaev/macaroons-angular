import { Component, HostListener, Input } from '@angular/core';
import { AdvantageType } from '../../types/advantage.type';
import { TextCroppingPipe } from '../../pipes/text-cropping-pipe';
import { MouseAction } from "../../directives/mouse-action";

@Component({
  selector: 'advantage',
  imports: [TextCroppingPipe, MouseAction],
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
}
