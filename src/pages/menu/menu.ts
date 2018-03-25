import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OrderPage } from '../../pages/order/order';
import { ContactPage } from '../../pages/contact/contact';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  //menulists:any=0;

  store:any;
  menu: any;
  amount: any;
  add:any;
  price: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.menu = navParams.get('item');
    this.store = navParams.get('store');

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openOrder(){
    this.navCtrl.push(ContactPage,{
      store:this.store,
      menu:this.menu.menu_name,
      amount:this.amount,
      add:this.add,
      price:this.amount*this.menu.price
    });
  }
  
}
