import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MenuPage } from '../../pages/menu/menu';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  private menulists: any;
  store:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.store = navParams.get('item');
    
    this.http.get("http://localhost:8000/allmenus").map(res => res.json()).subscribe(data => {
      this.menulists = data;

    });



  }
  
  openMenu(data){
    this.navCtrl.push(MenuPage, {
      item:data,
      store:this.store
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
