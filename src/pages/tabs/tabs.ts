import { Component } from '@angular/core';

import { OrderPage } from '../order/order';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrderPage;

  constructor() {

  }
}


