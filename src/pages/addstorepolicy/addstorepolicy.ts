import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TypeOfInsurancePage } from '../type-Of-Insurance/type-Of-Insurance';
import { NgForm } from '@angular/forms';
/**
 * Generated class for the AddstorepolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstorepolicy',
  templateUrl: 'addstorepolicy.html',
})
export class AddstorepolicyPage {

insurance:string= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstorepolicyPage');
  }
  onSubmit(form: NgForm){
    // if(this.insurance!==""&& this.isSelected!==""){
     // alert("hmm"+form.valid);
      if(form.valid){
 
       this.navCtrl.push(TypeOfInsurancePage);
      }else{
        return;
      }
}
}
