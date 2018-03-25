import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  private orderlists:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) { 

    this.http.get("http://localhost:8000/allorders").map(res => res.json()).subscribe(data => {
      this.orderlists = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
}
