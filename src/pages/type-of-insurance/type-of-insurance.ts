import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeCameraPage } from '../home-camera/home-camera';
//import { NgForm } from '@angular/forms';
/**
 * Generated class for the TypeOfInsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-of-insurance',
  templateUrl: 'type-of-insurance.html',
})
export class TypeOfInsurancePage {

isSelected:string = '';
insurance:string= '';

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeOfInsurancePage');
  }
  life(value) {
    console.log(value);
    this.navCtrl.push(HomeCameraPage);
  }
  car() {
    this.navCtrl.push(HomeCameraPage);
  }
  health() {
    this.navCtrl.push(HomeCameraPage);
  }
  travel() {
    this.navCtrl.push(HomeCameraPage);
  }
  //onSubmit(form: NgForm){
   //if(this.insurance!==""&& this.isSelected!==""){
    // alert("hmm"+form.valid);
    // if(form.valid){

    //this.navCtrl.push(HomeCameraPage);
     //}
     //else{
     //  return;
    // }
    //}
  }
