import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { StorePage } from '../store/store';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private storelists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
    this.http.get("http://localhost:8000/allstores").map(res => res.json()).subscribe(data => {
      this.storelists = data;
    });
    
  }

  openStore(data){
    this.navCtrl.push(StorePage, {item:data});
  }
}
