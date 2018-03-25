import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { OrderPage } from '../../pages/order/order';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  private locationlists:any;

  //data:any={};
  menu: any
  amount: any;
  add: any;
  price: any;

  cus_name: string;
  cus_phone: any;
  location: any;
  store: any;
  totalprice: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.http.get("http://localhost:8000/alllocations").map(res => res.json()).subscribe(data => {
      this.locationlists = data;
    });

    this.menu = navParams.get('menu');
    this.amount = navParams.get('amount');
    this.add = navParams.get('add');
    this.price = navParams.get('price');
    this.store = navParams.get('store');

    this.totalprice = this.price+5;


  }

/*postRequest() {
    var link = 'http://localhost:8000/makeorder';
    let headers = new Headers(
      {
        'Content-Type' : 'application/json'
      });
      let options = new RequestOptions({ headers: headers });    
      var myData = JSON.stringify({menu: this.data.menu,
      amount: this.data.amount,
      add: this.data.add,
      totalprice: this.data.totalprice,
      cus_name: this.data.cus_name,
      cus_phone: this.data.cus_phone,
      location: this.data.location,
      store: this.data.store,});
 
    this.http.post(link, myData, options)
    .subscribe(data => {
    this.data.response = data["_body"]; 
    }, error => {
    console.log("Oooops!");
    });
  }*/

  /*postData(){
    var url = 'http://localhost:8000/test';
    let postData = new FormData();
    postData.append('menu', 'this.data.menu');
    postData.append('amount', 'this.data.amount');
    postData.append('add', 'this.data.add');
    postData.append('totalprice', 'this.data.totalprice');
    postData.append('cus_name', 'this.data.cus_name');
    postData.append('cus_phone', 'this.data.cus_phone');
    postData.append('location', 'this.data.location');
    postData.append('store', 'this.data.store');

    this.datas = this.http.post(url, postData);
    this.datas.subscribe(data =>{
      console.log(data);
    }); 
  }*/

  makeOrder(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    let data = JSON.stringify({
      menu: this.menu,
      amount: this.amount,
      add: this.add,
      totalprice: this.totalprice,
      cus_name: this.cus_name,
      cus_phone: this.cus_phone,
      location: this.location,
      store: this.store,});

      this.http.post('http://localhost:8000/makeorder',data, {headers:headers})
      .map(res => res.json())
      .subscribe(res => {
      alert("success "+res);
      }, (err) => {
      alert("ERR : "+err.message);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
