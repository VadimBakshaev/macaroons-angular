import { Component, OnInit } from '@angular/core';
import { AdvantageType } from './types/advantage.type';
import { AssortmentType } from './types/assortment.type';
import { FormsModule } from '@angular/forms';
import { AssortmentService } from './services/assortment-service';
import { CartCountService } from './services/cart-count-service';
import { CartCountType } from './types/cart-count.type';
import { Advantages } from "./components/advantages/advantages";
import { Assortment } from "./components/assortment/assortment";
import { ButtonAction } from "./directives/button-action";
import { PriceTrasformPipe } from './pipes/price-trasform-pipe';
import { PhonePrettyPipe } from './pipes/phone-pretty-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Advantages, Assortment, ButtonAction, PriceTrasformPipe, PhonePrettyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AssortmentService, CartCountService]
})
export class App implements OnInit {
  public showCart: boolean = true;
  public phoneNumber: number = 375293689868;
  public instaLink: string = '';
  public count: CartCountType = {
    unitCount: '',
    priceCount: 0
  };
  public assortment: AssortmentType[] = [];

  constructor(private assortmentService: AssortmentService, private cartCount: CartCountService) { }

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  ngOnInit(): void {
    this.assortment = this.assortmentService.getAssortment();
    this.count = this.cartCount.getCartCount();
  }

  public formValue = {
    userChange: '',
    userName: '',
    userPhone: ''
  };

  public onOrder(unit: AssortmentType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValue.userChange = (unit.name).toUpperCase();
    this.count = this.cartCount.incrementCount(unit.price);
    alert(unit.name + ' добавлен в корзину!');
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  };

  public openMenu(menu: HTMLElement): void {
    menu.classList.toggle('open');
  };


}
