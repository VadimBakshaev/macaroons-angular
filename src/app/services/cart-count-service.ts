import { Injectable } from '@angular/core';
import { CartCountType } from '../types/cart-count.type';

@Injectable()
export class CartCountService {
  private count: number = 0;
  private priceCount: number = 0;

  public getCartCount(): CartCountType {
    return {
      unitCount: `'${this.count}'`,
      priceCount: this.priceCount
    }
  }

  public incrementCount(price: number): CartCountType {
    this.count++;
    this.priceCount += price;
    return this.getCartCount();
  }
  
  public decrementCount(price: number): CartCountType {
    if (this.count > 0) {
      this.count--;
      this.priceCount -= price;
      if (this.priceCount < 0) this.priceCount = 0;
    }
    return this.getCartCount();
  }
}
