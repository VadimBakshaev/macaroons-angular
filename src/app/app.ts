import { Component } from '@angular/core';
import { AdvantageType } from './types/advantage.type';
import { AssortmentType } from './types/assortment.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instaLink: string = '';
  
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

  public assortment: AssortmentType[] = [
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
  ];

  public formValue = {
    userChange: '',
    userName: '',
    userPhone: ''
  };

  public onOrder(unit: AssortmentType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValue.userChange = (unit.name).toUpperCase();
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  };

  public openMenu(menu: HTMLElement): void {
    menu.classList.toggle('open');
  };


}
