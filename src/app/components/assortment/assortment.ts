import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssortmentType } from '../../types/assortment.type';
import { ButtonAction } from "../../directives/button-action";
import { PriceTrasformPipe } from '../../pipes/price-trasform-pipe';

@Component({
  selector: 'assortment',
  imports: [ButtonAction, PriceTrasformPipe],
  templateUrl: './assortment.html',
  styleUrl: './assortment.scss',
})
export class Assortment {
  @Input() unit: AssortmentType;
  @Input() index: number = 0;
  @Output() addToCartEvent: EventEmitter<AssortmentType> = new EventEmitter<AssortmentType>();

  constructor() {
    this.unit = {
      image: '',
      name: '',
      count: 0,
      price: 0
    }
  }

  public addToCart():void{
    this.addToCartEvent.emit(this.unit);
  }
}
