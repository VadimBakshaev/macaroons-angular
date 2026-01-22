import { Injectable } from '@angular/core';
import { AssortmentType } from '../types/assortment.type';

@Injectable()
export class AssortmentService {
  public getAssortment(): AssortmentType[] {
    // ajax
    return [
      {
        image: '1.png',
        name: 'Макарун с малиной',
        count: 1,
        price: 1.7
      },
      {
        image: '2.png',
        name: 'Макарун с манго',
        count: 1,
        price: 1.7
      },
      {
        image: '3.png',
        name: 'Пирог с ванилью',
        count: 1,
        price: 1.7
      },
      {
        image: '4.png',
        name: 'Макарун с киви',
        count: 1,
        price: 1.7
      },
    ]
  }
}
